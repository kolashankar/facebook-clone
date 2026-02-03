import React, { useState } from 'react';
import { currentUser, posts, friends } from '../mock';
import { Camera, Pen, Plus, MoreHorizontal, ChevronDown, Briefcase, GraduationCap, MapPin, Home, Heart, Clock, Users } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Posts');

  const tabs = ['Posts', 'About', 'Friends', 'Photos', 'Videos', 'Check-ins', 'More'];

  return (
    <div className="bg-[#F0F2F5] min-h-screen">
      {/* Header Section (White Background) */}
      <div className="bg-white shadow-sm pb-1">
        <div className="max-w-[1095px] mx-auto">
          {/* Cover Photo */}
          <div className="relative h-[350px] md:h-[400px] rounded-b-xl overflow-hidden bg-gray-300">
             <img src={currentUser.coverPic} className="w-full h-full object-cover" alt="Cover" />
             <button className="absolute bottom-4 right-8 bg-white px-3 py-2 rounded-md font-semibold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <Camera size={16} fill="black" />
                Edit cover photo
             </button>
          </div>

          {/* Profile Info Section */}
          <div className="px-8 pb-4">
             <div className="flex flex-col md:flex-row gap-4 relative">
                {/* Profile Picture */}
                <div className="relative -mt-[80px] md:-mt-[30px] self-center md:self-start mx-auto md:mx-0">
                    <div className="w-[168px] h-[168px] rounded-full p-1 bg-white">
                        <img src={currentUser.profilePic} className="w-full h-full rounded-full object-cover border border-gray-200" alt="Profile" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-[#E4E6EB] p-2 rounded-full cursor-pointer hover:bg-[#D8DADF]">
                        <Camera size={20} fill="black" />
                    </div>
                </div>

                {/* Name & Friends Count */}
                <div className="mt-4 md:mt-8 flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold">{currentUser.name}</h1>
                    <span className="text-gray-500 font-semibold">{currentUser.followers} friends</span>
                    <div className="flex justify-center md:justify-start -space-x-2 mt-2">
                        {friends.slice(0, 8).map(f => (
                            <img key={f.id} src={f.img} className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 items-end justify-center md:justify-start mb-4 md:mb-0 mt-4 md:mt-0">
                    <button className="bg-[#0866FF] text-white px-3 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-[#075CE5]">
                        <Plus size={16} strokeWidth={3} />
                        Add to story
                    </button>
                    <button className="bg-[#E4E6EB] text-black px-3 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-[#D8DADF]">
                        <Pen size={16} strokeWidth={3} />
                        Edit profile
                    </button>
                    <button className="bg-[#E4E6EB] text-black px-3 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-[#D8DADF]">
                        <ChevronDown size={16} strokeWidth={3} />
                    </button>
                </div>
             </div>

             <div className="h-[1px] bg-gray-300 mt-8 mb-1"></div>

             {/* Navigation Tabs */}
             <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                {tabs.map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-3 font-semibold rounded-lg text-[15px] whitespace-nowrap transition-colors relative
                        ${activeTab === tab ? 'text-[#0866FF]' : 'text-gray-500 hover:bg-[#F0F2F5]'}`}
                    >
                        {tab}
                        {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0866FF]"></div>}
                    </button>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Profile Content Body */}
      <div className="max-w-[1095px] mx-auto p-4 flex flex-col md:flex-row gap-4">
        {/* Left Column (Intro & Photos) */}
        <div className="w-full md:w-[40%] flex flex-col gap-4">
             {/* Intro Card */}
             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold mb-4">Intro</h2>
                <div className="text-center mb-4 text-[15px]">{currentUser.bio}</div>
                <div className="space-y-4 text-[15px]">
                    <div className="flex items-center gap-3 text-gray-700">
                        <Briefcase size={20} className="text-gray-400" />
                        <span>Works at <strong>{currentUser.work.split(' at ')[1]}</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <GraduationCap size={20} className="text-gray-400" />
                        <span>Studied at <strong>IIT Bombay</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <Home size={20} className="text-gray-400" />
                        <span>Lives in <strong>{currentUser.location}</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <MapPin size={20} className="text-gray-400" />
                        <span>From <strong>{currentUser.hometown}</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <Heart size={20} className="text-gray-400" />
                        <span>{currentUser.relationship}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <Clock size={20} className="text-gray-400" />
                        <span>Joined {currentUser.joined}</span>
                    </div>
                </div>
                <button className="w-full bg-[#E4E6EB] hover:bg-[#D8DADF] py-2 rounded-lg font-semibold mt-4 transition-colors">
                    Edit details
                </button>
                <button className="w-full bg-[#E4E6EB] hover:bg-[#D8DADF] py-2 rounded-lg font-semibold mt-2 transition-colors">
                    Add Hobbies
                </button>
             </div>

             {/* Photos Card */}
             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Photos</h2>
                    <span className="text-[#0866FF] cursor-pointer hover:bg-blue-50 px-2 py-1 rounded">See all photos</span>
                </div>
                <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
                    {posts.filter(p => p.image).slice(0, 9).map((p, i) => (
                        <img key={i} src={p.image} className="w-full h-28 object-cover cursor-pointer hover:opacity-90" alt="" />
                    ))}
                    {/* Add random fillers if not enough post images */}
                    {[1,2,3].map(i => (
                         <img key={`r-${i}`} src={`https://picsum.photos/200?random=${i+20}`} className="w-full h-28 object-cover cursor-pointer hover:opacity-90" alt="" />
                    ))}
                </div>
             </div>

             {/* Friends Card */}
             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-xl font-bold">Friends</h2>
                        <span className="text-gray-500 text-sm">{currentUser.followers} friends</span>
                    </div>
                    <span className="text-[#0866FF] cursor-pointer hover:bg-blue-50 px-2 py-1 rounded">See all friends</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {friends.slice(0, 9).map(f => (
                        <div key={f.id} className="cursor-pointer">
                            <img src={f.img} className="w-full h-28 object-cover rounded-lg mb-1" alt="" />
                            <div className="font-semibold text-[13px] leading-tight">{f.name}</div>
                        </div>
                    ))}
                </div>
             </div>
        </div>

        {/* Right Column (Posts Feed) */}
        <div className="flex-1">
            {/* Create Post Widget (Reused style) */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200">
                <div className="flex gap-3 mb-3">
                    <img src={currentUser.profilePic} className="w-10 h-10 rounded-full object-cover" alt="" />
                    <div className="bg-[#F0F2F5] hover:bg-[#E4E6EB] transition-colors rounded-full flex-1 flex items-center px-4 cursor-pointer">
                        <span className="text-gray-500">What's on your mind?</span>
                    </div>
                </div>
                <div className="h-[1px] bg-gray-200 my-2"></div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 hover:bg-[#F0F2F5] p-2 rounded-lg cursor-pointer flex-1 justify-center">
                        <Camera className="text-[#F02849]" />
                        <span className="text-gray-500 font-semibold text-sm">Live video</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#F0F2F5] p-2 rounded-lg cursor-pointer flex-1 justify-center">
                        <Users className="text-[#45BD62]" />
                        <span className="text-gray-500 font-semibold text-sm">Tag people</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-[#F0F2F5] p-2 rounded-lg cursor-pointer flex-1 justify-center">
                        <MapPin className="text-[#F7B928]" />
                        <span className="text-gray-500 font-semibold text-sm">Check in</span>
                    </div>
                </div>
            </div>

            {/* Profile Filter Panel */}
             <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-bold">Posts</h2>
                <div className="flex gap-2">
                    <button className="bg-[#E4E6EB] px-3 py-1.5 rounded-lg font-semibold text-sm flex items-center gap-2">
                        Filters
                    </button>
                    <button className="bg-[#E4E6EB] px-3 py-1.5 rounded-lg font-semibold text-sm flex items-center gap-2">
                        Manage posts
                    </button>
                </div>
            </div>


            {/* Reusing Post Card Logic from Home (simplified copy for now) */}
            {posts.filter(p => p.user === currentUser.name).map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm pb-1 mb-4 border border-gray-200">
                    <div className="p-3">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-2">
                                <img src={post.profilePic} className="w-10 h-10 rounded-full object-cover" alt="" />
                                <div>
                                    <h4 className="font-semibold text-[15px]">{post.user}</h4>
                                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                                        <span>{post.time}</span>
                                        <span>·</span>
                                        <Users size={12} />
                                    </div>
                                </div>
                            </div>
                            <MoreHorizontal className="text-gray-500" />
                        </div>
                        <div className="mt-2 text-[15px]">{post.content}</div>
                    </div>
                    {post.image && (
                        <div className="w-full bg-gray-100">
                            <img src={post.image} className="w-full h-auto object-cover max-h-[600px]" alt="" />
                        </div>
                    )}
                    {/* Simplified Footer for Profile View */}
                    <div className="px-4 py-2 border-t border-gray-100">
                        <div className="flex gap-1 pt-1">
                            <button className="flex-1 py-1.5 rounded-lg text-gray-500 hover:bg-[#F0F2F5] font-semibold text-sm">Like</button>
                            <button className="flex-1 py-1.5 rounded-lg text-gray-500 hover:bg-[#F0F2F5] font-semibold text-sm">Comment</button>
                            <button className="flex-1 py-1.5 rounded-lg text-gray-500 hover:bg-[#F0F2F5] font-semibold text-sm">Share</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
