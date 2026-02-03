import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Users, Store, MonitorPlay, Clock, Bookmark, Calendar, ChevronDown, Gamepad2, Flag, UserGroup } from 'lucide-react'; // Fixed icons
import { currentUser } from '../mock';

const Sidebar = () => {
    return (
        <div className="space-y-1">
            <Link to="/profile" className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-lg transition-colors cursor-pointer mb-2">
                <img src={currentUser.profilePic} className="w-9 h-9 rounded-full object-cover border border-gray-200" alt="" />
                <span className="font-semibold text-[15px]">{currentUser.name}</span>
            </Link>
            
            <SidebarItem to="/friends" icon={<Users size={28} className="text-[#1877F2]" />} text="Friends" />
            <SidebarItem to="/marketplace" icon={<Store size={28} className="text-[#1877F2]" />} text="Marketplace" />
            <SidebarItem to="/groups" icon={<Users size={28} className="text-[#1877F2] p-0.5 border-2 border-[#1877F2] rounded-full" />} text="Groups" /> 
            <SidebarItem to="/video" icon={<MonitorPlay size={28} className="text-[#1877F2]" />} text="Video" />
            <SidebarItem to="/memories" icon={<Clock size={28} className="text-[#1877F2]" />} text="Memories" />
            <SidebarItem to="/saved" icon={<Bookmark size={28} className="text-[#A033FF]" fill="#A033FF" />} text="Saved" />
            <SidebarItem to="/pages" icon={<Flag size={28} className="text-[#F02849]" fill="#F02849" />} text="Pages" />
            <SidebarItem to="/events" icon={<Calendar size={28} className="text-[#F02849]" />} text="Events" />
            <SidebarItem to="/gaming" icon={<Gamepad2 size={28} className="text-[#1877F2]" />} text="Gaming" />
            
            <div className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-lg transition-colors cursor-pointer">
                <div className="w-9 h-9 bg-[#E4E6EB] rounded-full flex items-center justify-center">
                    <ChevronDown size={20} />
                </div>
                <span className="font-medium text-[15px]">See more</span>
            </div>

            <div className="h-[1px] bg-gray-300 my-4 mx-2"></div>
            
            <h3 className="text-gray-500 font-semibold px-2 mb-2 text-[17px]">Your shortcuts</h3>
            <ShortcutItem img="https://picsum.photos/40?random=1" text="Candy Crush Saga" />
            <ShortcutItem img="https://picsum.photos/40?random=2" text="Tech Enthusiasts India" />
            <ShortcutItem img="https://picsum.photos/40?random=3" text="React Developers Group" />
            <ShortcutItem img="https://picsum.photos/40?random=4" text="Startup Founders" />
            
            <div className="mt-auto px-2 pt-4 text-xs text-gray-500 leading-relaxed">
                Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   More · Meta © 2025
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, text, to }) => (
    <NavLink to={to} className={({ isActive }) => `flex items-center gap-3 p-2 rounded-lg transition-colors cursor-pointer ${isActive ? 'bg-[#E4E6EB]' : 'hover:bg-black/5'}`}>
        {icon}
        <span className="font-medium text-[15px]">{text}</span>
    </NavLink>
);

const ShortcutItem = ({ img, text }) => (
    <div className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-lg transition-colors cursor-pointer">
        <img src={img} className="w-9 h-9 rounded-lg object-cover" alt="" />
        <span className="font-medium text-[15px] truncate">{text}</span>
    </div>
);

export default Sidebar;
