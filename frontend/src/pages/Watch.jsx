import React from 'react';
import { videos } from '../mock';
import { Search, Settings, MonitorPlay, Film, Clapperboard, Radio, Heart } from 'lucide-react';

const Watch = () => {
    return (
        <div className="flex gap-4 min-h-screen bg-[#F0F2F5]">
            {/* Left Menu for Watch - Visible on Desktop */}
            <div className="hidden lg:block w-[360px] fixed top-14 left-0 bottom-0 bg-white p-4 overflow-y-auto z-10 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Video</h1>
                    <div className="bg-[#E4E6EB] p-2 rounded-full cursor-pointer">
                        <Settings size={20} />
                    </div>
                </div>
                
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
                    <input 
                        type="text" 
                        placeholder="Search videos" 
                        className="w-full bg-[#F0F2F5] py-2 pl-10 pr-4 rounded-full outline-none"
                    />
                </div>

                <div className="space-y-1">
                    <MenuItem icon={<MonitorPlay size={24} className="fill-[#0866FF] text-[#0866FF]" />} text="Home" active />
                    <MenuItem icon={<Clapperboard size={24} />} text="Live" />
                    <MenuItem icon={<Film size={24} />} text="Reels" />
                    <MenuItem icon={<Radio size={24} />} text="Shows" />
                    <MenuItem icon={<Heart size={24} />} text="Saved Videos" />
                </div>
            </div>

            {/* Main Feed */}
            <div className="w-full lg:ml-[360px] max-w-[800px] mx-auto py-4 px-2 lg:px-8">
                <div className="mb-4 flex gap-2 overflow-x-auto no-scrollbar lg:hidden">
                    <Chip text="For You" active />
                    <Chip text="Live" />
                    <Chip text="Music" />
                    <Chip text="Gaming" />
                    <Chip text="Following" />
                </div>

                {videos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

const MenuItem = ({ icon, text, active }) => (
    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-[#F0F2F5]' : 'hover:bg-[#F0F2F5]'}`}>
        <div className={`p-1 rounded-full ${active ? 'bg-[#0866FF] text-white' : 'bg-transparent text-black'}`}>
             {active ? React.cloneElement(icon, { className: "fill-white text-white w-5 h-5" }) : icon}
        </div>
        <span className={`font-semibold text-[15px] ${active ? 'text-[#0866FF]' : 'text-black'}`}>{text}</span>
    </div>
);

const Chip = ({ text, active }) => (
    <button className={`px-4 py-2 rounded-full font-semibold text-[15px] whitespace-nowrap ${active ? 'bg-[#E7F3FF] text-[#0866FF]' : 'bg-white hover:bg-[#E4E6EB]'}`}>
        {text}
    </button>
);

const VideoCard = ({ video }) => (
    <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
        <div className="p-3 flex justify-between items-start">
            <div className="flex gap-3">
                <img src={video.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
                <div>
                    <h3 className="font-bold text-[15px] hover:underline cursor-pointer">{video.channel}</h3>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                        <span>{video.time}</span>
                        <span>·</span>
                        <MonitorPlay size={12} />
                    </div>
                </div>
            </div>
            <div className="text-[#0866FF] font-semibold text-sm cursor-pointer hover:underline">Follow</div>
        </div>
        
        <div className="px-3 mb-2 text-[15px]">{video.title}</div>
        
        <div className="w-full bg-black aspect-video relative group">
             <iframe 
                className="w-full h-full"
                src={video.videoUrl} 
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>

        <div className="p-3 border-t border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-4">
                 <button className="flex items-center gap-2 bg-[#F0F2F5] hover:bg-[#E4E6EB] px-4 py-1.5 rounded-full font-semibold text-sm transition-colors">
                    Like
                 </button>
                 <button className="flex items-center gap-2 bg-[#F0F2F5] hover:bg-[#E4E6EB] px-4 py-1.5 rounded-full font-semibold text-sm transition-colors">
                    Comment
                 </button>
                 <button className="flex items-center gap-2 bg-[#F0F2F5] hover:bg-[#E4E6EB] px-4 py-1.5 rounded-full font-semibold text-sm transition-colors">
                    Share
                 </button>
            </div>
            <div className="text-sm text-gray-500">{video.views}</div>
        </div>
    </div>
);

export default Watch;
