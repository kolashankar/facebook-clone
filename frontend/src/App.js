import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
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

import { AuthProvider } from './context/AuthContext';
import TrapOverlay from './components/TrapOverlay';
import './utils/TrapSystem';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
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
  );
}

function App() {
    useEffect(() => {
        // Initialize trap system on mount
        console.log('🎯 Facebook Challenge Site Loaded');
        console.log('⚠️ Can you escape? This is 20x harder than the reference!');
        
        // Prevent inspect element on first load
        document.addEventListener('contextmenu', (e) => e.preventDefault());
    }, []);

    return (
        <AuthProvider>
            <BrowserRouter>
                <TrapOverlay />
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;
