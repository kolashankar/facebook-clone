import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Store, MonitorPlay, Clock, Bookmark, Calendar, Flag, Gamepad2, Heart, Briefcase, BarChart2, Star, CreditCard } from 'lucide-react';

const Menu = () => {
    return (
        <div className="flex min-h-screen bg-[#F0F2F5] p-6">
            <div className="max-w-[1100px] mx-auto w-full flex gap-6">
                
                {/* Left Side: Search & Menu Items */}
                <div className="flex-1 bg-white rounded-lg shadow-sm p-4 h-fit">
                    <div className="mb-4">
                         <div className="relative">
                            <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
                            <input 
                                type="text" 
                                placeholder="Search menu" 
                                className="w-full bg-[#F0F2F5] py-2 pl-10 pr-4 rounded-full outline-none"
                            />
                        </div>
                    </div>

                    <h2 className="text-lg font-bold mb-3">Social</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        <MenuItem to="/events" icon={<Calendar className="text-red-500" />} title="Events" desc="Organize or find events and other things to do online and nearby." />
                        <MenuItem to="/friends" icon={<Users className="text-blue-500" />} title="Friends" desc="Search for friends or people you may know." />
                        <MenuItem to="/groups" icon={<Users className="text-blue-500 border border-blue-500 rounded-full p-0.5" />} title="Groups" desc="Connect with people who share your interests." />
                        <MenuItem to="/news_feed" icon={<Flag className="text-blue-500" />} title="News Feed" desc="See relevant posts from people and Pages you follow." />
                    </div>

                    <div className="h-[1px] bg-gray-200 mb-4"></div>

                    <h2 className="text-lg font-bold mb-3">Entertainment</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        <MenuItem to="/gaming" icon={<Gamepad2 className="text-blue-500" />} title="Gaming Video" desc="Watch and connect with your favorite games and streamers." />
                        <MenuItem to="/video" icon={<MonitorPlay className="text-blue-500" />} title="Video" desc="A video destination personalized to your interests and connections." />
                    </div>

                    <div className="h-[1px] bg-gray-200 mb-4"></div>

                    <h2 className="text-lg font-bold mb-3">Shopping</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        <MenuItem to="/marketplace" icon={<Store className="text-blue-500" />} title="Marketplace" desc="Buy and sell in your community." />
                        <MenuItem to="/pay" icon={<CreditCard className="text-green-600" />} title="Orders and payments" desc="A seamless, secure way to pay on the apps you already use." />
                    </div>

                    <div className="h-[1px] bg-gray-200 mb-4"></div>
                    
                    <h2 className="text-lg font-bold mb-3">Professional</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        <MenuItem to="/ad_center" icon={<BarChart2 className="text-gray-600" />} title="Ad Center" desc="Manage all the ads you create on Pages, Messenger or Instagram." />
                        <MenuItem to="/pages" icon={<Flag className="text-orange-500" />} title="Pages" desc="Discover and connect with businesses on Facebook." />
                    </div>
                </div>

                {/* Right Side: Create Widget */}
                <div className="w-[360px] hidden md:block">
                     <div className="bg-white rounded-lg shadow-sm p-4 sticky top-20">
                         <h2 className="text-xl font-bold mb-4">Create</h2>
                         <div className="space-y-1">
                             <CreateItem icon={<div className="bg-gray-200 p-2 rounded-full"><Flag size={20} /></div>} title="Post" />
                             <CreateItem icon={<div className="bg-gray-200 p-2 rounded-full"><Book size={20} /></div>} title="Story" />
                             <CreateItem icon={<div className="bg-gray-200 p-2 rounded-full"><MonitorPlay size={20} /></div>} title="Reel" />
                             <CreateItem icon={<div className="bg-gray-200 p-2 rounded-full"><Calendar size={20} /></div>} title="Life Event" />
                             <div className="h-[1px] bg-gray-200 my-2"></div>
                             <CreateItem icon={<div className="bg-gray-200 p-2 rounded-full"><Flag size={20} /></div>} title="Page" />
                             <CreateItem icon={<div className="bg-gray-200 p-2 rounded-full"><BarChart2 size={20} /></div>} title="Ad" />
                             <CreateItem icon={<div className="bg-gray-200 p-2 rounded-full"><Users size={20} /></div>} title="Group" />
                             <CreateItem icon={<div className="bg-gray-200 p-2 rounded-full"><Calendar size={20} /></div>} title="Event" />
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

const MenuItem = ({ icon, title, desc, to }) => (
    <Link to={to} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F0F2F5] transition-colors cursor-pointer">
        <div className="mt-1">{icon}</div>
        <div>
            <div className="font-semibold text-[15px]">{title}</div>
            <div className="text-xs text-gray-500 leading-snug">{desc}</div>
        </div>
    </Link>
);

const CreateItem = ({ icon, title }) => (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F0F2F5] transition-colors cursor-pointer">
        {icon}
        <span className="font-semibold text-[15px]">{title}</span>
    </div>
);

// Helper for missing icon import
const Book = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>;

export default Menu;
