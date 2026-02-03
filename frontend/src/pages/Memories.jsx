import React from 'react';
import { memories } from '../mock';
import { Share2, MoreHorizontal } from 'lucide-react';

const Memories = () => {
    return (
        <div className="flex justify-center min-h-screen bg-[#F0F2F5] pt-8">
            <div className="w-full max-w-[680px] px-4">
                {/* Hero Section */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-40 flex items-center justify-center flex-col text-white p-6">
                        <h1 className="text-3xl font-bold mb-2">Memories</h1>
                        <p className="opacity-90">We hope you enjoy looking back and sharing your memories on Facebook, from the most recent to those long ago.</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4 ml-2">On This Day</h2>
                    {memories.map(memory => (
                        <div key={memory.id} className="bg-white rounded-lg shadow-sm mb-6 pb-2">
                             <div className="p-4 flex items-center gap-3 border-b border-gray-100">
                                <div className="w-10 h-10 bg-[#E7F3FF] rounded-full flex items-center justify-center text-[#1877F2] font-bold">
                                    {memory.year.split(' ')[0]}
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs uppercase font-semibold">On This Day</div>
                                    <div className="font-bold text-[15px]">{memory.year}</div>
                                </div>
                             </div>
                             
                             {/* The Memory Post */}
                             <div className="p-4">
                                <div className="flex gap-2 mb-3">
                                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80" className="w-10 h-10 rounded-full" alt="" />
                                    <div>
                                        <div className="font-semibold">Kola Shanakar</div>
                                        <div className="text-xs text-gray-500">{memory.date}</div>
                                    </div>
                                </div>
                                <div className="mb-3">{memory.content}</div>
                                <img src={memory.img} className="w-full rounded-lg" alt="" />
                             </div>

                             <div className="px-4 py-2 border-t border-gray-100">
                                <button className="w-full bg-[#E7F3FF] text-[#1877F2] py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
                                    <Share2 size={18} />
                                    Share
                                </button>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Memories;
