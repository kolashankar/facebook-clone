from fastapi import FastAPI, APIRouter, Depends
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime

# Import routers
from .auth import router as auth_router
from .posts import router as posts_router

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Dependency to yield database connection
async def get_db():
    return db

# Create the main app without a prefix
app = FastAPI()

# Create a main router with the /api prefix
api_router = APIRouter(prefix="/api")

# Include sub-routers
# We need to use dependency injection for DB in the sub-routers.
# A cleaner way in FastAPI is to override the dependency, but since we are just passing it:
# We will attach the routes and let them use the global db or dependency.
# The routers in auth.py and posts.py expect a 'db' parameter.
# We'll use a wrapper or just use the global db for this MVP simplicity if dependency injection gets complex without a container.
# However, the best practice is dependency injection.
# Let's verify how I defined the routes: `db: AsyncIOMotorDatabase = Depends(lambda: None)`
# I need to override this dependency in the app.

api_router.include_router(auth_router)
api_router.include_router(posts_router)

app.include_router(api_router)

# Override the dependency
app.dependency_overrides[lambda: None] = get_db

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# Root check
@app.get("/")
async def root():
    return {"message": "API Running"}
