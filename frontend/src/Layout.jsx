import React from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Home, MonitorPlay, Store, Users, Bell, MessageCircle, Menu, Grid } from 'lucide-react';
import { currentUser } from './mock';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-[#242526] shadow-sm z-50 flex items-center justify-between px-4">
      {/* Left: Logo & Search */}
      <div className="flex items-center gap-2">
        <Link to="/">
            <svg viewBox="0 0 36 36" className="fill-current text-[#0866FF]" height="40" width="40">
                <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 27.435v-9.4H10.74V18h3.26v-2.834c0-3.219 1.921-4.996 4.846-4.996 1.402 0 2.868.25 2.868.25V13.6h-1.616c-1.595 0-2.09.99-2.09 2.006V18h3.61l-.577 4.035h-3.033V36h2.17z"></path>
            </svg>
        </Link>
        <div className="bg-[#F0F2F5] dark:bg-[#3A3B3C] flex items-center px-3 py-2 rounded-full w-60 hidden md:flex">
          <Search className="w-5 h-5 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search Facebook" 
            className="bg-transparent border-none outline-none ml-2 text-sm w-full placeholder-gray-500 text-black dark:text-white"
          />
        </div>
        <div className="md:hidden bg-[#F0F2F5] p-2 rounded-full">
            <Search className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Center: Navigation Tabs */}
      <div className="hidden md:flex items-center gap-1 h-full">
        <NavTab to="/" icon={<Home size={28} />} />
        <NavTab to="/video" icon={<MonitorPlay size={28} />} />
        <NavTab to="/marketplace" icon={<Store size={28} />} />
        <NavTab to="/groups" icon={<Users size={28} />} />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 md:gap-3">
        <div className="md:hidden">
            <Menu className="w-6 h-6" />
        </div>
        <ActionIcon icon={<Grid size={20} />} />
        <ActionIcon icon={<MessageCircle size={20} />} />
        <ActionIcon icon={<Bell size={20} />} />
        
        <Link to="/profile" className="relative">
            <img 
                src={currentUser.profilePic} 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </Link>
      </div>
    </div>
  );
};

const NavTab = ({ to, icon }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `px-8 h-[90%] flex items-center justify-center rounded-lg transition-colors relative group
      ${isActive ? 'text-[#0866FF]' : 'text-gray-500 hover:bg-[#F0F2F5]'}`
    }
  >
    {({ isActive }) => (
      <>
        {icon}
        {isActive && <div className="absolute bottom-0 h-[3px] w-full bg-[#0866FF]"></div>}
        <div className="absolute inset-0 rounded-lg group-hover:bg-black/5 transition-colors"></div>
      </>
    )}
  </NavLink>
);

const ActionIcon = ({ icon }) => (
  <div className="w-10 h-10 bg-[#E4E6EB] dark:bg-[#3A3B3C] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#D8DADF] transition-colors">
    {icon}
  </div>
);

const Layout = () => {
  const location = useLocation();
  // Hide sidebars on profile page to match real FB layout (Profile usually takes full width or special layout)
  // Actually on desktop FB, left sidebar is often collapsible or different, but lets keep it for now.
  // Correction: On profile page, the left sidebar is NOT present in the same way. It's usually cleaner.
  // But to keep it simple and consistent with the "clone" request which asked for pages, I will conditionally hide right sidebar on profile.
  
  const isProfile = location.pathname === '/profile';

  return (
    <div className="min-h-screen bg-[#F0F2F5] dark:bg-[#18191A] text-black dark:text-white pt-14">
      <Navbar />
      <div className="flex justify-between">
         {/* Left Sidebar - Sticky */}
         {/* On Profile page, standard sidebar is often hidden or replaced. We'll keep it for navigation consistency but maybe adjust logic later */}
        <div className={`w-[360px] hidden ${isProfile ? 'xl:hidden' : 'xl:block'} fixed left-0 top-14 bottom-0 overflow-y-auto p-4 hover:overflow-y-scroll custom-scrollbar`}>
           <Sidebar />
        </div>

        {/* Main Content - Centered */}
        {/* If Profile, we give it full width minus sidebars if present */}
        <div className={`flex-1 min-h-screen ${isProfile ? 'w-full' : 'max-w-[740px] mx-auto p-4 md:px-8 xl:px-16'}`}>
          <Outlet />
        </div>

        {/* Right Sidebar - Sticky */}
        <div className={`w-[360px] hidden ${isProfile ? 'lg:hidden' : 'lg:block'} fixed right-0 top-14 bottom-0 overflow-y-auto p-4 hover:overflow-y-scroll custom-scrollbar`}>
           <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
