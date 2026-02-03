import React from 'react';
import { fundraisers } from '../mock';
import { Heart, Search, Filter } from 'lucide-react';

const Fundraisers = () => {
    return (
        <div className="flex min-h-screen bg-[#F0F2F5]">
             {/* Sidebar */}
             <div className="hidden lg:block w-[360px] fixed top-14 left-0 bottom-0 bg-white p-4 overflow-y-auto z-10 shadow-sm border-r border-gray-200">
                <h1 className="text-2xl font-bold mb-4">Fundraisers</h1>
                
                <button className="w-full bg-[#0866FF] text-white py-2 rounded-lg font-bold mb-4 flex items-center justify-center gap-2">
                        <Heart size={20} fill="white" />
                        Raise Money
                </button>

                 <div className="space-y-1">
                    <MenuItem icon={<Heart size={24} />} text="Explore" active />
                    <MenuItem icon={<Heart size={24} />} text="Your fundraisers" />
                    <MenuItem icon={<Heart size={24} />} text="Donations" />
                </div>
            </div>

            {/* Content */}
             <div className="w-full lg:ml-[360px] max-w-[900px] mx-auto py-8 px-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white mb-8 flex justify-between items-center shadow-md">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-bold mb-2">Support a cause you care about</h2>
                        <p className="text-lg opacity-90">From animals to education, find a fundraiser that touches your heart.</p>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Popular right now</h2>
                    <div className="flex gap-2">
                        <div className="bg-white p-2 rounded-full shadow-sm cursor-pointer"><Search size={20} /></div>
                        <div className="bg-white p-2 rounded-full shadow-sm cursor-pointer"><Filter size={20} /></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fundraisers.map(fund => (
                        <div key={fund.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 group cursor-pointer hover:shadow-md transition-all">
                            <div className="h-40 overflow-hidden">
                                <img src={fund.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-2 leading-tight h-12">{fund.title}</h3>
                                
                                <div className="mb-2">
                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                        <span className="font-bold text-black">{fund.raised} raised</span>
                                        <span>of {fund.goal}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#0866FF] h-2 rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                                
                                <button className="w-full border border-gray-300 py-2 rounded-lg font-semibold mt-2 hover:bg-gray-50">Donate</button>
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
        <div className={`p-2 rounded-full bg-[#E4E6EB] text-black`}>
             {icon}
        </div>
        <span className={`font-semibold text-[15px] text-black`}>{text}</span>
    </div>
);

export default Fundraisers;
