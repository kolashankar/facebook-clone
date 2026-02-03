# Facebook Clone Implementation Plan - Part 4 (Backend Integration)

## Phase 19: Backend Foundations & Authentication
- [ ] **Database Models**: Create Pydantic models for `User` and `UserInDB`.
- [ ] **Auth API**: Implement `/api/auth/register` and `/api/auth/login` endpoints with JWT support.
- [ ] **Frontend Integration**: 
    - Create `AuthContext` to manage user session.
    - Connect `Login.jsx` to the backend.
    - Handle logout functionality.

## Phase 20: Core Social Feed API
- [ ] **Post Models**: Create Schema for `Post` (content, image, author, likes).
- [ ] **Feed API**: Implement `/api/posts` (GET list, POST create).
- [ ] **Frontend Integration**:
    - Fetch posts from backend in `Home.jsx`.
    - Connect "Create Post" modal to actual API.
    - Ensure new posts appear dynamically in the feed.
