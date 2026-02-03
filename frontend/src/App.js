import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Marketplace from './pages/Marketplace';
import Watch from './pages/Watch';
import Gaming from './pages/Gaming';

// Placeholder components
const Groups = () => <div className="p-4 bg-white rounded-lg shadow">Groups Feed</div>;
const Memories = () => <div className="p-4 bg-white rounded-lg shadow">Memories Page</div>;
const Saved = () => <div className="p-4 bg-white rounded-lg shadow">Saved Items</div>;
const Events = () => <div className="p-4 bg-white rounded-lg shadow">Events Page</div>;
const Pages = () => <div className="p-4 bg-white rounded-lg shadow">Pages Manager</div>;

function App() {
  const isAuthenticated = true; 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="friends" element={<Friends />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="video" element={<Watch />} />
          <Route path="gaming" element={<Gaming />} />
          <Route path="groups" element={<Groups />} />
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
