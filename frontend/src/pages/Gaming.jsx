import React from 'react';
import { games } from '../mock';
import { Search, Settings, User, Bookmark, PlayCircle, Trophy } from 'lucide-react';

const Gaming = () => {
    return (
        <div className="flex min-h-screen bg-[#F0F2F5]">
            {/* Left Sidebar - Gaming Menu */}
             <div className="hidden lg:block w-[360px] fixed top-14 left-0 bottom-0 bg-white p-4 overflow-y-auto z-10 shadow-sm border-r border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Gaming</h1>
                    <div className="bg-[#E4E6EB] p-2 rounded-full cursor-pointer">
                        <Settings size={20} />
                    </div>
                </div>
                
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
                    <input 
                        type="text" 
                        placeholder="Search games" 
                        className="w-full bg-[#F0F2F5] py-2 pl-10 pr-4 rounded-full outline-none"
                    />
                </div>

                <div className="space-y-1">
                    <MenuItem icon={<PlayCircle size={24} />} text="Play Games" active />
                    <MenuItem icon={<User size={24} />} text="Your Games" />
                    <MenuItem icon={<Bookmark size={24} />} text="Saved" />
                    <MenuItem icon={<Trophy size={24} />} text="Tournaments" />
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:ml-[360px] p-6">
                {/* Hero Section */}
                <div className="rounded-xl overflow-hidden mb-8 relative h-[300px] bg-gradient-to-r from-purple-800 to-blue-600 flex items-center p-8 text-white">
                    <div className="z-10 max-w-lg">
                        <h2 className="text-4xl font-bold mb-4">Play Ludo King with Friends!</h2>
                        <p className="text-lg mb-6 opacity-90">Join millions of players in the most popular board game online.</p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                            Play Now
                        </button>
                    </div>
                    <img src="https://picsum.photos/400/400?random=99" className="absolute right-0 bottom-0 h-full w-[50%] object-cover opacity-50 mask-image-linear-gradient" alt="Banner" />
                </div>

                {/* Games Grid */}
                <h3 className="text-xl font-bold mb-4">Instant Games</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {games.map(game => (
                        <div key={game.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                            <div className="aspect-square overflow-hidden">
                                <img src={game.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={game.title} />
                            </div>
                            <div className="p-3">
                                <div className="font-bold text-[15px] truncate">{game.title}</div>
                                <div className="text-xs text-gray-500">{game.players}</div>
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


export default Gaming;
