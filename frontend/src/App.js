import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';

// Placeholder components for 15+ pages structure
const Profile = () => <div className="p-4 bg-white rounded-lg shadow">Profile Page (Work in Progress)</div>;
const Friends = () => <div className="p-4 bg-white rounded-lg shadow">Friends Page</div>;
const Video = () => <div className="p-4 bg-white rounded-lg shadow">Video Watch Page</div>;
const Marketplace = () => <div className="p-4 bg-white rounded-lg shadow">Marketplace Page</div>;
const Groups = () => <div className="p-4 bg-white rounded-lg shadow">Groups Feed</div>;
const Gaming = () => <div className="p-4 bg-white rounded-lg shadow">Gaming Page</div>;
const Memories = () => <div className="p-4 bg-white rounded-lg shadow">Memories Page</div>;
const Saved = () => <div className="p-4 bg-white rounded-lg shadow">Saved Items</div>;
const Events = () => <div className="p-4 bg-white rounded-lg shadow">Events Page</div>;
const Pages = () => <div className="p-4 bg-white rounded-lg shadow">Pages Manager</div>;

function App() {
  const isAuthenticated = true; // Mock authentication

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Main App Layout Routes */}
        <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="friends" element={<Friends />} />
          <Route path="video" element={<Video />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="groups" element={<Groups />} />
          <Route path="gaming" element={<Gaming />} />
          <Route path="memories" element={<Memories />} />
          <Route path="saved" element={<Saved />} />
          <Route path="events" element={<Events />} />
          <Route path="pages" element={<Pages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
