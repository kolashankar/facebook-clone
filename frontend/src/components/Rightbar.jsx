import React from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import { contacts } from '../mock';

const Rightbar = () => {
    return (
        <div>
            <h3 className="text-gray-500 font-semibold mb-2 text-[17px]">Sponsored</h3>
            <div className="mb-4 hover:bg-black/5 p-2 rounded-lg cursor-pointer transition-colors group">
                <div className="flex items-center gap-3">
                     <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&auto=format&fit=crop&q=60" className="w-32 h-32 object-cover rounded-lg" alt="Ad" />
                     <div className="flex flex-col justify-center">
                        <span className="font-semibold text-[15px] text-black">Smart Watch Pro</span>
                        <span className="text-xs text-gray-500">store.techgadgets.com</span>
                     </div>
                </div>
            </div>
            <div className="mb-4 hover:bg-black/5 p-2 rounded-lg cursor-pointer transition-colors group">
                <div className="flex items-center gap-3">
                     <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=200&auto=format&fit=crop&q=60" className="w-32 h-32 object-cover rounded-lg" alt="Ad" />
                     <div className="flex flex-col justify-center">
                        <span className="font-semibold text-[15px] text-black">Learn Design Fast</span>
                        <span className="text-xs text-gray-500">designacademy.io</span>
                     </div>
                </div>
            </div>

            <div className="h-[1px] bg-gray-300 my-2"></div>
            
            <div className="flex items-center justify-between mb-2 pr-2">
                <h3 className="text-gray-500 font-semibold text-[17px]">Contacts</h3>
                <div className="flex gap-4 text-gray-500">
                    <Search size={16} className="cursor-pointer hover:text-black" />
                    <MoreHorizontal size={16} className="cursor-pointer hover:text-black" />
                </div>
            </div>

            <div className="space-y-1">
                {contacts.map(c => (
                     <div key={c.id} className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-lg cursor-pointer transition-colors">
                        <div className="relative">
                            <img src={c.img} className="w-9 h-9 rounded-full object-cover border border-gray-100" alt="" />
                            {c.active && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>}
                        </div>
                        <span className="font-semibold text-[15px]">{c.name}</span>
                    </div>
                ))}
            </div>
            
            <div className="h-[1px] bg-gray-300 my-4"></div>
            <h3 className="text-gray-500 font-semibold mb-2 text-[17px]">Group Conversations</h3>
             <div className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-lg cursor-pointer transition-colors">
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold border border-gray-300">
                    +
                </div>
                <span className="font-medium text-[15px]">Create New Group</span>
            </div>

        </div>
    );
};

export default Rightbar;
