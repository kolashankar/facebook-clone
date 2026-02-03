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

import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    
    if (loading) return <div>Loading...</div>;
    
    if (!user) {
        return <Navigate to="/login" />;
    }
    
    return children;
};

function AppRoutes() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
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
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;
