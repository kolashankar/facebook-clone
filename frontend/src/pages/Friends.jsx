import React from 'react';
import { friends } from '../mock';

const Friends = () => {
    // Duplicate friends list to make it look longer
    const allFriends = [...friends, ...friends, ...friends];

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-2xl font-bold mb-6">Friends</h1>
            
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Friend Requests</h2>
                    <span className="text-[#0866FF] cursor-pointer">See all</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {allFriends.slice(0, 5).map((f, i) => (
                        <FriendCard key={i} friend={f} isRequest={true} />
                    ))}
                </div>
            </div>

            <div className="h-[1px] bg-gray-300 my-6"></div>

            <div>
                 <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">People You May Know</h2>
                    <span className="text-[#0866FF] cursor-pointer">See all</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {allFriends.slice(5, 15).map((f, i) => (
                        <FriendCard key={i} friend={f} isRequest={false} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const FriendCard = ({ friend, isRequest }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
        <img src={friend.img} className="w-full h-48 object-cover" alt="" />
        <div className="p-3">
            <h3 className="font-semibold text-[17px] mb-1 truncate">{friend.name}</h3>
            {isRequest ? (
                <div className="flex flex-col gap-2 mt-2">
                    <button className="bg-[#0866FF] text-white py-1.5 rounded-lg font-semibold text-sm hover:bg-[#1877F2]">Confirm</button>
                    <button className="bg-[#E4E6EB] text-black py-1.5 rounded-lg font-semibold text-sm hover:bg-[#D8DADF]">Delete</button>
                </div>
            ) : (
                <div className="flex flex-col gap-2 mt-2">
                     <span className="text-sm text-gray-500 mb-1">{friend.mutual} mutual friends</span>
                    <button className="bg-[#E4E6EB] text-[#0866FF] py-1.5 rounded-lg font-semibold text-sm hover:bg-[#D8DADF]">Add Friend</button>
                </div>
            )}
        </div>
    </div>
);

export default Friends;
