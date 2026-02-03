import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { Search, Home, MonitorPlay, Store, Users, Bell, MessageCircle, Menu, UserCircle, Grid } from 'lucide-react';
import { currentUser } from './mock';

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
  return (
    <div className="min-h-screen bg-[#F0F2F5] dark:bg-[#18191A] text-black dark:text-white pt-14">
      <Navbar />
      <div className="flex justify-between">
         {/* Left Sidebar - Hidden on mobile */}
        <div className="w-[360px] hidden xl:block fixed left-0 top-14 bottom-0 overflow-y-auto p-4 hover:overflow-y-scroll custom-scrollbar">
           <SidebarContent />
        </div>

        {/* Main Content - Centered */}
        <div className="flex-1 max-w-[740px] mx-auto min-h-screen p-4 md:px-8 xl:px-16">
          <Outlet />
        </div>

        {/* Right Sidebar - Hidden on smaller screens */}
        <div className="w-[360px] hidden lg:block fixed right-0 top-14 bottom-0 overflow-y-auto p-4 hover:overflow-y-scroll custom-scrollbar">
           <RightbarContent />
        </div>
      </div>
    </div>
  );
};

// Simple placeholders for sidebars to prevent errors before full implementation
const SidebarContent = () => {
    return (
        <div className="space-y-2">
            <Link to="/profile" className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-lg transition-colors cursor-pointer">
                <img src={currentUser.profilePic} className="w-9 h-9 rounded-full object-cover" alt="" />
                <span className="font-semibold text-[15px]">{currentUser.name}</span>
            </Link>
            <SidebarItem icon={<Users size={24} className="text-[#1877F2]" />} text="Friends" />
            <SidebarItem icon={<Store size={24} className="text-[#1877F2]" />} text="Marketplace" />
            <SidebarItem icon={<MonitorPlay size={24} className="text-[#1877F2]" />} text="Video" />
            <div className="h-[1px] bg-gray-300 my-2"></div>
            <h3 className="text-gray-500 font-semibold px-2 mb-2">Your Shortcuts</h3>
             <SidebarItem img="https://picsum.photos/40?random=1" text="Candy Crush Saga" />
             <SidebarItem img="https://picsum.photos/40?random=2" text="Tech Enthusiasts India" />
        </div>
    )
}

const RightbarContent = () => {
    const { contacts } = require('./mock');
    return (
        <div>
            <h3 className="text-gray-500 font-semibold mb-2">Sponsored</h3>
            <div className="mb-4 hover:bg-black/5 p-2 rounded-lg cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                     <img src="https://picsum.photos/120/120?random=10" className="w-32 h-32 object-cover rounded-lg" alt="Ad" />
                     <div className="flex flex-col">
                        <span className="font-semibold text-[15px]">Luxury Watches</span>
                        <span className="text-xs text-gray-500">shop.luxurywatches.com</span>
                     </div>
                </div>
            </div>
            <div className="h-[1px] bg-gray-300 my-2"></div>
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-500 font-semibold">Contacts</h3>
                <div className="flex gap-2 text-gray-500">
                    <Search size={16} />
                </div>
            </div>
            {contacts.map(c => (
                 <div key={c.id} className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-lg cursor-pointer transition-colors">
                    <div className="relative">
                        <img src={c.img} className="w-9 h-9 rounded-full object-cover" alt="" />
                        {c.active && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>}
                    </div>
                    <span className="font-semibold text-[15px]">{c.name}</span>
                </div>
            ))}
        </div>
    )
}

const SidebarItem = ({ icon, img, text }) => (
    <div className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-lg transition-colors cursor-pointer">
        {icon ? icon : <img src={img} className="w-9 h-9 rounded-lg object-cover" alt="" />}
        <span className="font-medium text-[15px]">{text}</span>
    </div>
)


export default Layout;
