import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { posts, friends } from '../mock';
import { Search, User, FileText, Image, Users } from 'lucide-react';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || 'React'; // Default mock query

    const tabs = [
        { name: "All", icon: <Search size={20} /> },
        { name: "Posts", icon: <FileText size={20} /> },
        { name: "People", icon: <User size={20} /> },
        { name: "Photos", icon: <Image size={20} /> },
        { name: "Groups", icon: <Users size={20} /> },
    ];

    return (
        <div className="flex min-h-screen bg-[#F0F2F5]">
             {/* Left Sidebar - Filters */}
             <div className="hidden lg:block w-[360px] fixed top-14 left-0 bottom-0 bg-white p-4 overflow-y-auto z-10 shadow-sm border-r border-gray-200">
                <h1 className="text-2xl font-bold mb-4">Search Results</h1>
                <div className="h-[1px] bg-gray-300 mb-4"></div>
                <h3 className="font-semibold mb-2">Filters</h3>
                
                <div className="space-y-1">
                    {tabs.map((tab, idx) => (
                        <div 
                            key={tab.name} 
                            className={`flex items-center gap-3 p-3 rounded-full cursor-pointer transition-colors ${idx === 0 ? 'bg-[#E7F3FF] text-[#0866FF]' : 'hover:bg-[#F0F2F5]'}`}
                        >
                            <div className={`p-2 rounded-full ${idx === 0 ? 'bg-[#0866FF] text-white' : 'bg-[#E4E6EB] text-black'}`}>
                                {tab.icon}
                            </div>
                            <span className="font-semibold text-[15px]">{tab.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:ml-[360px] max-w-[700px] mx-auto py-6 px-4">
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <h2 className="font-bold text-xl mb-4">People</h2>
                    {friends.slice(0, 3).map(f => (
                         <div key={f.id} className="flex items-center justify-between mb-4 last:mb-0">
                            <div className="flex items-center gap-3">
                                <img src={f.img} className="w-16 h-16 rounded-full object-cover border border-gray-200" alt="" />
                                <div>
                                    <h3 className="font-semibold text-[17px]">{f.name}</h3>
                                    <div className="text-sm text-gray-500">{f.work || "Software Engineer"} · {f.location || "Mumbai"}</div>
                                    <div className="text-xs text-gray-500">{f.mutual} mutual friends</div>
                                </div>
                            </div>
                            <button className="bg-[#E7F3FF] text-[#0866FF] px-4 py-2 rounded-lg font-semibold hover:bg-[#D8E4F0]">Add Friend</button>
                        </div>
                    ))}
                    <button className="w-full bg-[#E4E6EB] hover:bg-[#D8DADF] py-2 rounded-lg font-semibold mt-2">See all</button>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                     <h2 className="font-bold text-xl mb-4">Posts from friends</h2>
                     {/* Reuse Post Card logic or simplified version */}
                     {posts.slice(0, 2).map(post => (
                        <div key={post.id} className="mb-6 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <div className="flex gap-2 mb-2">
                                <img src={post.profilePic} className="w-10 h-10 rounded-full object-cover" alt="" />
                                <div>
                                    <div className="font-semibold">{post.user}</div>
                                    <div className="text-xs text-gray-500">{post.time}</div>
                                </div>
                            </div>
                            <div className="mb-2">{post.content}</div>
                            {post.image && <img src={post.image} className="w-full rounded-lg" alt="" />}
                        </div>
                     ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
