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
import Groups from './pages/Groups';
import Events from './pages/Events';
import Memories from './pages/Memories';
import Saved from './pages/Saved';
import Pages from './pages/Pages';
import Messenger from './pages/Messenger';
import SearchResults from './pages/SearchResults';
import Settings from './pages/Settings';
import Fundraisers from './pages/Fundraisers';
import AdCenter from './pages/AdCenter';
import Menu from './pages/Menu';

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
          <Route path="messages" element={<Messenger />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="settings" element={<Settings />} />
          <Route path="fundraisers" element={<Fundraisers />} />
          <Route path="ad_center" element={<AdCenter />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
