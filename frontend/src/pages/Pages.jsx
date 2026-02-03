import React from 'react';
import { managedPages } from '../mock';
import { Flag, Plus, BarChart2, Bell } from 'lucide-react';

const Pages = () => {
    return (
        <div className="flex min-h-screen bg-[#F0F2F5]">
             {/* Left Sidebar */}
             <div className="hidden lg:block w-[360px] fixed top-14 left-0 bottom-0 bg-white p-4 overflow-y-auto z-10 shadow-sm border-r border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Pages</h1>
                </div>

                 <button className="w-full bg-[#E7F3FF] text-[#0866FF] py-2 rounded-lg font-semibold mt-2 flex items-center justify-center gap-2 mb-4">
                        <Plus size={20} />
                        Create New Page
                </button>

                 <div className="space-y-1">
                    <MenuItem icon={<Flag size={24} />} text="Your Pages" active />
                    <MenuItem icon={<BarChart2 size={24} />} text="Meta Business Suite" />
                    <MenuItem icon={<Bell size={24} />} text="Notifications" />
                    <MenuItem icon={<Flag size={24} />} text="Liked Pages" />
                    <MenuItem icon={<Flag size={24} />} text="Invites" />
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:ml-[360px] max-w-[900px] mx-auto py-8 px-6">
                <h2 className="text-xl font-bold mb-4">Pages you manage</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {managedPages.map(page => (
                        <div key={page.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 cursor-pointer hover:shadow-md transition-shadow">
                            <div className="h-24 bg-gray-200 relative">
                                <img src={page.img} className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="px-4 pb-4">
                                <div className="relative -mt-8 mb-2">
                                    <img src={page.img} className="w-16 h-16 rounded-full border-2 border-white" alt="" />
                                </div>
                                <h3 className="font-bold text-lg">{page.name}</h3>
                                <div className="text-sm text-gray-500 mb-4">{page.category}</div>
                                
                                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span>5 notifications</span>
                                    </div>
                                    <button className="bg-[#E4E6EB] px-3 py-1.5 rounded-md font-semibold text-black hover:bg-[#D8DADF]">Switch Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const MenuItem = ({ icon, text, active }) => (
    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-[#F0F2F5]' : 'hover:bg-[#F0F2F5]'}`}>
        <div className={`p-1 rounded-full ${active ? 'bg-[#1877F2] text-white' : 'bg-[#E4E6EB] text-black'}`}>
             {icon}
        </div>
        <span className={`font-semibold text-[15px] ${active ? 'text-[#1877F2]' : 'text-black'}`}>{text}</span>
    </div>
);

export default Pages;
