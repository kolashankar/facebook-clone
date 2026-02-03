from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime
import uuid

class UserBase(BaseModel):
    name: str
    email: EmailStr
    profile_pic: Optional[str] = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"

class UserCreate(UserBase):
    password: str

class UserInDB(UserBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    hashed_password: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class UserResponse(UserBase):
    id: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class PostBase(BaseModel):
    content: str
    image: Optional[str] = None

class PostCreate(PostBase):
    pass

class PostInDB(PostBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    user_name: str
    user_pic: str
    likes: int = 0
    comments: int = 0
    shares: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

class PostResponse(PostInDB):
    pass
