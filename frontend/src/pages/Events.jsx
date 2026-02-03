import React from 'react';
import { events } from '../mock';
import { Search, Settings, Calendar, Plus, MapPin } from 'lucide-react';

const Events = () => {
    return (
        <div className="flex min-h-screen bg-[#F0F2F5]">
             {/* Left Sidebar */}
             <div className="hidden lg:block w-[360px] fixed top-14 left-0 bottom-0 bg-white p-4 overflow-y-auto z-10 shadow-sm border-r border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Events</h1>
                    <div className="bg-[#E4E6EB] p-2 rounded-full cursor-pointer">
                        <Settings size={20} />
                    </div>
                </div>

                 <div className="space-y-1">
                    <MenuItem icon={<Calendar size={24} />} text="Your Events" active />
                    <MenuItem icon={<Calendar size={24} />} text="Birthdays" />
                    <MenuItem icon={<Calendar size={24} />} text="Discover" />
                    <button className="w-full bg-[#E7F3FF] text-[#0866FF] py-2 rounded-lg font-semibold mt-2 flex items-center justify-center gap-2">
                        <Plus size={20} />
                        Create New Event
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:ml-[360px] max-w-[900px] mx-auto py-8 px-6">
                <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {events.map(event => (
                        <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 flex flex-col">
                            <img src={event.img} className="h-40 w-full object-cover" alt="" />
                            <div className="p-4 flex gap-4">
                                <div className="flex flex-col items-center bg-gray-100 rounded-lg px-3 py-1 h-fit">
                                    <span className="text-red-500 font-bold text-xs uppercase">{event.date.split(',')[0]}</span>
                                    <span className="text-xl font-bold">{event.date.split(' ')[2]}</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                                    <div className="text-sm text-gray-500 mb-1">{event.date}</div>
                                    <div className="text-sm text-gray-500 flex items-center gap-1 mb-4">
                                        <MapPin size={14} />
                                        {event.location}
                                    </div>
                                    <div className="flex gap-2 w-full">
                                        <button className="flex-1 bg-[#E4E6EB] text-black py-1.5 rounded-lg font-semibold text-sm">Interested</button>
                                        <button className="flex-1 bg-[#0866FF] text-white py-1.5 rounded-lg font-semibold text-sm">Going</button>
                                    </div>
                                    <div className="mt-2 text-xs text-gray-500">{event.interested} people interested</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="h-[1px] bg-gray-300 my-8"></div>
                
                <h2 className="text-xl font-bold mb-4">Events you might like</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {/* Repeating for visual fill */}
                     {events.slice(0,2).map(event => (
                        <div key={`s-${event.id}`} className="bg-white rounded-lg shadow-sm p-4 flex gap-4 items-center">
                            <img src={event.img} className="w-24 h-24 rounded-lg object-cover" alt="" />
                            <div>
                                 <div className="text-sm text-red-500 font-bold mb-1">{event.date}</div>
                                 <h3 className="font-bold text-base mb-1">{event.title}</h3>
                                 <div className="text-sm text-gray-500">{event.location}</div>
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

export default Events;
