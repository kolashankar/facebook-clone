import React from 'react';
import { savedItems } from '../mock';
import { Settings, MoreHorizontal } from 'lucide-react';

const Saved = () => {
    return (
        <div className="flex min-h-screen bg-[#F0F2F5]">
             {/* Left Sidebar */}
             <div className="hidden lg:block w-[360px] fixed top-14 left-0 bottom-0 bg-white p-4 overflow-y-auto z-10 shadow-sm border-r border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Saved</h1>
                    <div className="bg-[#E4E6EB] p-2 rounded-full cursor-pointer">
                        <Settings size={20} />
                    </div>
                </div>

                <div className="space-y-1">
                    <MenuItem text="Saved Items" active />
                    <MenuItem text="Collections" />
                </div>
                 
                 <div className="h-[1px] bg-gray-300 my-4"></div>
                 <h3 className="font-semibold text-lg mb-2">My Collections</h3>
                 <button className="w-full bg-[#E7F3FF] text-[#0866FF] py-2 rounded-lg font-semibold mt-2">
                        + Create New Collection
                 </button>
            </div>

            {/* Main Content */}
            <div className="w-full lg:ml-[360px] max-w-[900px] mx-auto py-8 px-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">All Saved Items</h2>
                    <div className="bg-[#E4E6EB] p-2 rounded-md font-semibold text-sm">All</div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    {savedItems.map((item, i) => (
                        <div key={item.id} className={`flex items-center gap-4 p-4 hover:bg-[#F0F2F5] cursor-pointer transition-colors ${i !== savedItems.length -1 ? 'border-b border-gray-100' : ''}`}>
                            <img src={item.img} className="w-24 h-24 rounded-lg object-cover" alt="" />
                            <div className="flex-1">
                                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                <div className="text-sm text-gray-500 mb-2">{item.type} · Saved from {item.source}</div>
                                <div className="flex gap-2">
                                     <button className="bg-[#E4E6EB] px-4 py-1.5 rounded-md font-semibold text-sm hover:bg-[#D8DADF]">Add to Collection</button>
                                </div>
                            </div>
                            <div className="p-2 rounded-full hover:bg-[#E4E6EB]">
                                <MoreHorizontal size={20} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const MenuItem = ({ text, active }) => (
    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-[#F0F2F5]' : 'hover:bg-[#F0F2F5]'}`}>
        <div className={`p-2 rounded-full ${active ? 'bg-[#1877F2] text-white' : 'bg-[#E4E6EB] text-black'}`}>
             <div className="w-4 h-4 rounded-sm bg-current"></div>
        </div>
        <span className={`font-semibold text-[15px] ${active ? 'text-[#1877F2]' : 'text-black'}`}>{text}</span>
    </div>
);

export default Saved;
