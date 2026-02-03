from fastapi import APIRouter, HTTPException, status, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from typing import List
from .models import PostCreate, PostResponse, PostInDB
from .auth import get_current_user, TokenData

router = APIRouter(prefix="/posts", tags=["Posts"])

@router.get("/", response_model=List[PostResponse])
async def get_posts(db: AsyncIOMotorDatabase = Depends(lambda: None)):
    posts = await db.posts.find().sort("created_at", -1).to_list(100)
    return posts

@router.post("/", response_model=PostResponse)
async def create_post(
    post: PostCreate, 
    current_user: TokenData = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(lambda: None)
):
    # Fetch full user details to embed in post (denormalization for speed)
    user = await db.users.find_one({"email": current_user.email})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
        
    new_post = PostInDB(
        **post.dict(),
        user_id=user["id"],
        user_name=user["name"],
        user_pic=user["profile_pic"]
    )
    
    await db.posts.insert_one(new_post.dict())
    return new_post
