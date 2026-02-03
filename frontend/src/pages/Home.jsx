import React, { useState } from 'react';
import { stories, posts, currentUser } from '../mock';
import { Video, Image, Smile, ThumbsUp, MessageSquare, Share2, MoreHorizontal, X } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-[590px] mx-auto pt-4 space-y-4">
      {/* Story Reel */}
      <div className="relative h-[200px] flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {/* Create Story Card */}
        <div className="min-w-[110px] w-[110px] h-full bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer relative group">
            <img src={currentUser.profilePic} className="h-[75%] w-full object-cover group-hover:scale-105 transition-transform duration-300" alt="" />
            <div className="h-[25%] bg-white relative flex justify-center pt-6">
                 <div className="absolute -top-4 w-9 h-9 bg-[#0866FF] rounded-full flex items-center justify-center border-4 border-white">
                    <span className="text-white text-xl font-bold">+</span>
                 </div>
                 <span className="text-xs font-semibold">Create story</span>
            </div>
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
        </div>
        
        {/* Friends Stories */}
        {stories.map((story) => (
             <div key={story.id} className="min-w-[110px] w-[110px] h-full bg-gray-200 rounded-xl overflow-hidden cursor-pointer relative group">
                <img src={story.img} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-[#0866FF] overflow-hidden">
                     <img src={story.img} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="absolute bottom-3 left-3 text-white font-semibold text-sm shadow-black drop-shadow-md">
                    {story.user.split(' ')[0]}
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
             </div>
        ))}
      </div>

      {/* Create Post */}
      <div className="bg-white rounded-lg shadow-sm p-4">
         <div className="flex gap-3 mb-3">
             <img src={currentUser.profilePic} className="w-10 h-10 rounded-full object-cover" alt="" />
             <div className="bg-[#F0F2F5] hover:bg-[#E4E6EB] transition-colors rounded-full flex-1 flex items-center px-4 cursor-pointer">
                 <span className="text-gray-500">What's on your mind, Kola?</span>
             </div>
         </div>
         <div className="h-[1px] bg-gray-200 my-2"></div>
         <div className="flex justify-between px-2 pt-1">
             <div className="flex items-center gap-2 hover:bg-[#F0F2F5] p-2 rounded-lg cursor-pointer flex-1 justify-center">
                 <Video className="text-[#F02849]" />
                 <span className="text-gray-500 font-semibold text-sm">Live video</span>
             </div>
             <div className="flex items-center gap-2 hover:bg-[#F0F2F5] p-2 rounded-lg cursor-pointer flex-1 justify-center">
                 <Image className="text-[#45BD62]" />
                 <span className="text-gray-500 font-semibold text-sm">Photo/video</span>
             </div>
             <div className="flex items-center gap-2 hover:bg-[#F0F2F5] p-2 rounded-lg cursor-pointer flex-1 justify-center">
                 <Smile className="text-[#F7B928]" />
                 <span className="text-gray-500 font-semibold text-sm">Feeling/activity</span>
             </div>
         </div>
      </div>

      {/* Posts Feed */}
      {posts.map(post => (
          <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const PostCard = ({ post }) => {
    const [likes, setLikes] = useState(post.likes);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if(liked) {
            setLikes(likes - 1);
            setLiked(false);
        } else {
            setLikes(likes + 1);
            setLiked(true);
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-sm pb-1">
            <div className="p-3">
                <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                         <img src={post.profilePic} className="w-10 h-10 rounded-full object-cover" alt="" />
                         <div>
                             <h4 className="font-semibold text-[15px] hover:underline cursor-pointer">{post.user}</h4>
                             <div className="flex items-center gap-1 text-gray-500 text-xs">
                                 <span>{post.time}</span>
                                 <span>·</span>
                                 <Users size={12} />
                             </div>
                         </div>
                    </div>
                    <div className="p-2 hover:bg-[#F0F2F5] rounded-full cursor-pointer">
                        <MoreHorizontal size={20} className="text-gray-500" />
                    </div>
                </div>
                <div className="mt-2 text-[15px] leading-snug">
                    {post.content}
                </div>
            </div>
            
            {post.image && (
                <div className="w-full bg-gray-100 cursor-pointer">
                    <img src={post.image} className="w-full h-auto object-cover max-h-[600px]" alt="" />
                </div>
            )}

            <div className="px-4 py-2">
                <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                     <div className="flex items-center gap-1">
                         <div className="w-4 h-4 bg-[#0866FF] rounded-full flex items-center justify-center">
                             <ThumbsUp size={10} className="text-white fill-white" />
                         </div>
                         <span>{likes}</span>
                     </div>
                     <div className="flex gap-3">
                         <span>{post.comments} comments</span>
                         <span>{post.shares} shares</span>
                     </div>
                </div>
                <div className="h-[1px] bg-gray-200 mb-1"></div>
                <div className="flex gap-1">
                    <button 
                        onClick={handleLike}
                        className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-lg transition-colors font-semibold text-sm
                        ${liked ? 'text-[#0866FF]' : 'text-gray-500 hover:bg-[#F0F2F5]'}`}
                    >
                        <ThumbsUp size={20} className={liked ? "fill-current" : ""} />
                        Like
                    </button>
                     <button className="flex-1 flex items-center justify-center gap-2 py-1.5 rounded-lg text-gray-500 hover:bg-[#F0F2F5] transition-colors font-semibold text-sm">
                        <MessageSquare size={20} />
                        Comment
                    </button>
                     <button className="flex-1 flex items-center justify-center gap-2 py-1.5 rounded-lg text-gray-500 hover:bg-[#F0F2F5] transition-colors font-semibold text-sm">
                        <Share2 size={20} />
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
