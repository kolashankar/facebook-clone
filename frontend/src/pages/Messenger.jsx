import React, { useState } from 'react';
import { chats, messages, currentUser } from '../mock';
import { Search, Phone, Video, Info, MoreHorizontal, Image, ThumbsUp, PlusCircle, Smile, Mic } from 'lucide-react';

const Messenger = () => {
    const [activeChat, setActiveChat] = useState(chats[0]);

    return (
        <div className="flex h-[calc(100vh-56px)] bg-white overflow-hidden">
            {/* Left Sidebar - Chat List */}
            <div className="w-[360px] flex flex-col border-r border-gray-200 h-full">
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Chats</h1>
                        <div className="flex gap-2">
                             <div className="bg-[#F0F2F5] p-2 rounded-full cursor-pointer hover:bg-[#E4E6EB]"><MoreHorizontal size={20} /></div>
                             <div className="bg-[#F0F2F5] p-2 rounded-full cursor-pointer hover:bg-[#E4E6EB]"><PlusCircle size={20} /></div>
                        </div>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
                        <input 
                            type="text" 
                            placeholder="Search Messenger" 
                            className="w-full bg-[#F0F2F5] py-2 pl-10 pr-4 rounded-full outline-none"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    {chats.map(chat => (
                        <div 
                            key={chat.id} 
                            onClick={() => setActiveChat(chat)}
                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${activeChat.id === chat.id ? 'bg-[#E7F3FF]' : 'hover:bg-[#F0F2F5]'}`}
                        >
                            <div className="relative">
                                <img src={chat.img} className="w-12 h-12 rounded-full object-cover" alt="" />
                                {chat.unread && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-[15px] truncate">{chat.name}</h3>
                                <div className="flex gap-1 items-center text-sm text-gray-500 truncate">
                                    <span className={chat.unread ? 'font-bold text-black' : ''}>{chat.lastMsg}</span>
                                    <span>·</span>
                                    <span>{chat.time}</span>
                                </div>
                            </div>
                            {chat.unread && <div className="w-3 h-3 bg-[#0866FF] rounded-full"></div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side - Chat Window */}
            <div className="flex-1 flex flex-col h-full">
                {/* Chat Header */}
                <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4 shadow-sm z-10">
                    <div className="flex items-center gap-3">
                        <img src={activeChat.img} className="w-10 h-10 rounded-full object-cover" alt="" />
                        <div>
                            <h2 className="font-bold text-[17px]">{activeChat.name}</h2>
                            <div className="text-xs text-gray-500">Active now</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-[#0866FF]">
                        <Phone className="cursor-pointer hover:bg-[#F0F2F5] p-1 rounded-full w-9 h-9" />
                        <Video className="cursor-pointer hover:bg-[#F0F2F5] p-1 rounded-full w-9 h-9" />
                        <Info className="cursor-pointer hover:bg-[#F0F2F5] p-1 rounded-full w-9 h-9" />
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-white">
                    {/* Mock Profile Top */}
                    <div className="flex flex-col items-center mt-4 mb-8">
                        <img src={activeChat.img} className="w-24 h-24 rounded-full object-cover mb-2" alt="" />
                        <h3 className="font-bold text-xl">{activeChat.name}</h3>
                        <p className="text-gray-500 text-sm">You&apos;re friends on Facebook</p>
                    </div>

                    {messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} mb-1`}>
                            {!msg.isUser && <img src={activeChat.img} className="w-7 h-7 rounded-full object-cover mr-2 self-end mb-1" alt="" />}
                            <div 
                                className={`max-w-[70%] py-2 px-3 rounded-2xl text-[15px] 
                                ${msg.isUser 
                                    ? 'bg-[#0866FF] text-white rounded-br-none' 
                                    : 'bg-[#F0F2F5] text-black rounded-bl-none'}`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {/* Just visual padding at bottom */}
                    <div className="h-2"></div>
                </div>

                {/* Input Area */}
                <div className="p-3">
                    <div className="flex items-center gap-2">
                         <PlusCircle className="text-[#0866FF] cursor-pointer" />
                         <Image className="text-[#0866FF] cursor-pointer" />
                         <div className="bg-[#F0F2F5] flex-1 rounded-full px-4 py-2 flex items-center">
                             <input 
                                type="text" 
                                placeholder="Aa" 
                                className="bg-transparent border-none outline-none w-full text-[15px]"
                             />
                             <Smile className="text-[#0866FF] cursor-pointer" />
                         </div>
                         <ThumbsUp className="text-[#0866FF] cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Rightmost Sidebar - Chat Details (Optional/Hidden on smaller screens) */}
            <div className="w-[300px] border-l border-gray-200 hidden xl:flex flex-col p-4 items-center text-center">
                 <img src={activeChat.img} className="w-24 h-24 rounded-full object-cover mb-2" alt="" />
                 <h2 className="font-bold text-xl">{activeChat.name}</h2>
                 <p className="text-gray-500 text-sm mb-6">Active now</p>

                 <div className="w-full space-y-4">
                     <div className="flex justify-between items-center cursor-pointer hover:bg-[#F0F2F5] p-2 rounded-lg">
                         <span className="font-semibold text-sm">Customize chat</span>
                         <div className="rotate-90">›</div>
                     </div>
                     <div className="flex justify-between items-center cursor-pointer hover:bg-[#F0F2F5] p-2 rounded-lg">
                         <span className="font-semibold text-sm">Media, files and links</span>
                         <div className="rotate-90">›</div>
                     </div>
                     <div className="flex justify-between items-center cursor-pointer hover:bg-[#F0F2F5] p-2 rounded-lg">
                         <span className="font-semibold text-sm">Privacy and support</span>
                         <div className="rotate-90">›</div>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default Messenger;
