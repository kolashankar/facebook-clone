import React from 'react';
import { X, Image, User, Smile, MapPin, MoreHorizontal } from 'lucide-react';
import { currentUser } from '../mock';

const CreatePostModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-[500px] rounded-xl shadow-2xl relative animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-center p-4 border-b border-gray-200 relative">
                    <h2 className="text-xl font-bold">Create Post</h2>
                    <div 
                        onClick={onClose}
                        className="absolute right-4 bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 transition-colors"
                    >
                        <X size={20} />
                    </div>
                </div>

                {/* Body */}
                <div className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                        <img src={currentUser.profilePic} className="w-10 h-10 rounded-full object-cover" alt="" />
                        <div>
                            <div className="font-semibold">{currentUser.name}</div>
                            <div className="bg-gray-200 text-xs font-semibold px-2 py-1 rounded-md w-fit flex items-center gap-1 cursor-pointer">
                                <span>Public</span>
                                <i className="fas fa-caret-down"></i>
                            </div>
                        </div>
                    </div>

                    <textarea 
                        className="w-full min-h-[150px] text-xl outline-none resize-none placeholder-gray-500"
                        placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
                    ></textarea>

                    <div className="flex justify-between items-center mt-4 border border-gray-300 rounded-lg p-3 shadow-sm">
                        <span className="font-semibold text-sm">Add to your post</span>
                        <div className="flex gap-1">
                            <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"><Image className="text-green-500" size={24} /></div>
                            <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"><User className="text-blue-500" size={24} /></div>
                            <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"><Smile className="text-yellow-500" size={24} /></div>
                            <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"><MapPin className="text-red-500" size={24} /></div>
                            <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"><MoreHorizontal className="text-gray-500" size={24} /></div>
                        </div>
                    </div>

                    <button 
                        onClick={onClose}
                        className="w-full bg-[#0866FF] text-white font-bold py-2 rounded-lg mt-4 hover:bg-[#075CE5] transition-colors disabled:bg-gray-300 disabled:text-gray-500"
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;
