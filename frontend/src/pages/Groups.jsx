import React from 'react';
import { groups, posts } from '../mock';
import { Search, Settings, Compass, PlusCircle, Users } from 'lucide-react';

const Groups = () => {
    return (
        <div className="flex min-h-screen bg-[#F0F2F5]">
            {/* Left Sidebar - Groups Menu */}
            <div className="hidden lg:block w-[360px] fixed top-14 left-0 bottom-0 bg-white p-4 overflow-y-auto z-10 shadow-sm border-r border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Groups</h1>
                    <div className="bg-[#E4E6EB] p-2 rounded-full cursor-pointer">
                        <Settings size={20} />
                    </div>
                </div>
                
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
                    <input 
                        type="text" 
                        placeholder="Search groups" 
                        className="w-full bg-[#F0F2F5] py-2 pl-10 pr-4 rounded-full outline-none"
                    />
                </div>

                <div className="space-y-1">
                    <MenuItem icon={<Compass size={24} />} text="Discover" active />
                    <MenuItem icon={<Users size={24} />} text="Your Groups" />
                    <button className="w-full bg-[#E7F3FF] text-[#0866FF] py-2 rounded-lg font-semibold mt-2 flex items-center justify-center gap-2">
                        <PlusCircle size={20} />
                        Create New Group
                    </button>
                </div>

                <div className="h-[1px] bg-gray-300 my-4"></div>
                <h3 className="font-semibold text-lg mb-2">Groups you&apos;ve joined</h3>
                {groups.filter(g => g.joined).map(g => (
                    <div key={g.id} className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-lg cursor-pointer">
                        <img src={g.img} className="w-12 h-12 rounded-lg object-cover" alt="" />
                        <div>
                            <div className="font-semibold text-[15px]">{g.name}</div>
                            <div className="text-xs text-gray-500">Last active 2 hours ago</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="w-full lg:ml-[360px] max-w-[680px] mx-auto py-8 px-4">
                <h2 className="text-xl font-bold mb-4 text-gray-500">Recent Activity</h2>
                
                {/* Simulated Group Posts */}
                {posts.map(post => (
                    <GroupPostCard key={post.id} post={post} group={groups[0]} />
                ))}
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

const GroupPostCard = ({ post, group }) => (
    <div className="bg-white rounded-lg shadow-sm mb-4 p-4">
        <div className="flex items-center gap-3 mb-3">
             <div className="relative">
                 <img src={group.img} className="w-10 h-10 rounded-lg object-cover border border-gray-200" alt="" />
                 <img src={post.profilePic} className="w-6 h-6 rounded-full border-2 border-white absolute -bottom-1 -right-1" alt="" />
             </div>
             <div>
                 <div className="flex items-center gap-1">
                     <span className="font-bold text-[15px] hover:underline cursor-pointer">{group.name}</span>
                 </div>
                 <div className="text-xs text-gray-500 flex items-center gap-1">
                     <span className="font-semibold text-black">{post.user}</span>
                     <span>·</span>
                     <span>{post.time}</span>
                 </div>
             </div>
        </div>
        <div className="mb-3 text-[15px]">{post.content}</div>
        {post.image && <img src={post.image} className="w-full rounded-lg mb-3" alt="" />}
        
        <div className="flex border-t border-gray-100 pt-2">
            <button className="flex-1 font-semibold text-gray-500 py-2 hover:bg-gray-100 rounded-lg text-sm">Like</button>
            <button className="flex-1 font-semibold text-gray-500 py-2 hover:bg-gray-100 rounded-lg text-sm">Comment</button>
        </div>
    </div>
);

export default Groups;
