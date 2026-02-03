# Facebook Clone Implementation Plan

## Project Overview
This project aims to build a pixel-perfect, frontend-only clone of Facebook.com using React and Tailwind CSS. The application will feature a responsive design, mimicking the core functionality and aesthetic of the platform.

**User Profile Name:** Kola Shanakar

## Phase 1: Project Setup & Core Architecture
- [ ] **Dependencies**: Install `react-router-dom`, `lucide-react`, `framer-motion` (for smooth interactions), and `clsx`/`tailwind-merge` for styling.
- [ ] **Routing System**: Configure `react-router-dom` with routes for Home, Profile, Friends, Watch, Marketplace, Groups, Gaming, etc.
- [ ] **Global Layout**: Implement the persistent top Navigation Bar and the responsive 3-column layout (Sidebar, Feed, Rightbar) for the main feed.
- [ ] **Theme Config**: Set up Tailwind configuration for Facebook's specific color palette (Primary Blue: `#0866FF`, Background: `#F0F2F5`, Card: `#FFFFFF`, Text: `#050505`).

## Phase 2: Home Page (News Feed) Implementation
- [ ] **Left Sidebar**: Create navigation shortcuts (Friends, Memories, Saved, Groups, Video, Marketplace) with pixel-perfect icons.
- [ ] **Story Reel**: Implement the horizontal scrollable story carousel with zoom-in effects.
- [ ] **Create Post Widget**: Build the "What's on your mind, Kola?" input box with modal trigger.
- [ ] **Feed Stream**: Develop the infinite scroll feed component rendering rich posts (Text, Image, Video) with Like, Comment, and Share action buttons.
- [ ] **Right Sidebar**: Implement the Contacts list for messaging and "Sponsored" section.

## Phase 3: User Profile (Kola Shanakar)
- [ ] **Profile Header**: Build the massive Cover Photo, Profile Picture (with overlap), and "Edit Profile" controls.
- [ ] **Profile Navigation**: Tabs for Posts, About, Friends, Photos, Videos, Check-ins.
- [ ] **Intro Section**: "Bio", "Details" (Work, Education, Location), and Hobbies.
- [ ] **Photos & Friends Grid**: Visual grids showcasing recent photos and friend connections.
- [ ] **Profile Feed**: Filtered view of posts created specifically by Kola Shanakar.

## Phase 4: Authentication & Additional Pages
- [ ] **Login Page**: Replicate the iconic split-screen login page (Facebook branding on left, Login form/Create Account on right).
- [ ] **Register Modal**: The "Sign Up" popup with date of birth and gender selectors.
- [ ] **Friends Page**: Grid view of friend requests and suggestions.
- [ ] **Marketplace/Watch**: Placeholder layouts to demonstrate the multi-page architecture requested (15+ pages structure).

## Phase 5: Interaction & Data Mocking
- [ ] **Mock Data Engine**: Create a robust `mock.js` file containing "Kola Shanakar's" profile details, 20+ sample posts, 15+ mock friends, stories, and marketplace items.
- [ ] **Interactivity**: 
    - Functioning "Like" buttons with state.
    - Modal opening/closing for "Create Post".
    - Tab switching on Profile.
    - Hover effects on all interactive elements (grey bubbles).
- [ ] **Responsive Polish**: Ensure mobile view collapses sidebars and adapts the navbar.

## Future Phases (Backend Integration - Placeholder)
- [ ] Define API schemas for User, Post, Comment.
- [ ] Connect Authentication to FastAPI.
- [ ] Replace `mock.js` with actual API calls.
