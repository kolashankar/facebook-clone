import React from 'react';
import { adCampaigns } from '../mock';
import { BarChart, PieChart, Users, DollarSign, MousePointer } from 'lucide-react';

const AdCenter = () => {
    return (
        <div className="flex min-h-screen bg-[#F0F2F5]">
             {/* Left Sidebar */}
             <div className="hidden lg:block w-[300px] fixed top-14 left-0 bottom-0 bg-white p-4 overflow-y-auto z-10 shadow-sm border-r border-gray-200">
                <h1 className="text-2xl font-bold mb-6">Ad Center</h1>
                <div className="space-y-1">
                    <div className="p-3 bg-[#E7F3FF] text-[#0866FF] rounded-lg font-semibold cursor-pointer">Overview</div>
                    <div className="p-3 hover:bg-[#F0F2F5] rounded-lg font-semibold cursor-pointer text-gray-600">All Ads</div>
                    <div className="p-3 hover:bg-[#F0F2F5] rounded-lg font-semibold cursor-pointer text-gray-600">Audiences</div>
                    <div className="p-3 hover:bg-[#F0F2F5] rounded-lg font-semibold cursor-pointer text-gray-600">Settings</div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:ml-[300px] p-8">
                 <div className="flex justify-between items-center mb-8">
                     <div>
                         <h2 className="text-2xl font-bold">Overview</h2>
                         <p className="text-gray-500">Track the performance of your ad campaigns.</p>
                     </div>
                     <button className="bg-[#0866FF] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#075CE5] shadow-sm">
                         + Create Ad
                     </button>
                 </div>

                 {/* Metric Cards */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                         <div className="flex justify-between items-start mb-4">
                             <div>
                                 <p className="text-gray-500 font-semibold text-sm uppercase">People Reached</p>
                                 <h3 className="text-3xl font-bold mt-1">62.5K</h3>
                             </div>
                             <div className="bg-blue-100 p-2 rounded-full text-blue-600"><Users size={24} /></div>
                         </div>
                         <div className="text-green-500 text-sm font-semibold">↑ 12% from last week</div>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                         <div className="flex justify-between items-start mb-4">
                             <div>
                                 <p className="text-gray-500 font-semibold text-sm uppercase">Amount Spent</p>
                                 <h3 className="text-3xl font-bold mt-1">₹20,000</h3>
                             </div>
                             <div className="bg-green-100 p-2 rounded-full text-green-600"><DollarSign size={24} /></div>
                         </div>
                         <div className="text-gray-500 text-sm font-semibold">On budget</div>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                         <div className="flex justify-between items-start mb-4">
                             <div>
                                 <p className="text-gray-500 font-semibold text-sm uppercase">Link Clicks</p>
                                 <h3 className="text-3xl font-bold mt-1">1,650</h3>
                             </div>
                             <div className="bg-purple-100 p-2 rounded-full text-purple-600"><MousePointer size={24} /></div>
                         </div>
                         <div className="text-red-500 text-sm font-semibold">↓ 3% from last week</div>
                     </div>
                 </div>

                 <h3 className="text-xl font-bold mb-4">Recent Campaigns</h3>
                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                     <table className="w-full text-left">
                         <thead className="bg-gray-50 border-b border-gray-200">
                             <tr>
                                 <th className="p-4 font-semibold text-gray-500 text-sm">Campaign Name</th>
                                 <th className="p-4 font-semibold text-gray-500 text-sm">Status</th>
                                 <th className="p-4 font-semibold text-gray-500 text-sm">Reach</th>
                                 <th className="p-4 font-semibold text-gray-500 text-sm">Spent</th>
                                 <th className="p-4 font-semibold text-gray-500 text-sm">Clicks</th>
                             </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-100">
                             {adCampaigns.map(ad => (
                                 <tr key={ad.id} className="hover:bg-gray-50">
                                     <td className="p-4 font-semibold">{ad.name}</td>
                                     <td className="p-4">
                                         <span className={`px-2 py-1 rounded-full text-xs font-bold 
                                            ${ad.status === 'Active' ? 'bg-green-100 text-green-600' : 
                                              ad.status === 'Review' ? 'bg-yellow-100 text-yellow-600' : 
                                              'bg-gray-100 text-gray-600'}`}>
                                             {ad.status}
                                         </span>
                                     </td>
                                     <td className="p-4 text-gray-600">{ad.reach}</td>
                                     <td className="p-4 text-gray-600">{ad.spent}</td>
                                     <td className="p-4 text-gray-600">{ad.clicks}</td>
                                 </tr>
                             ))}
                         </tbody>
                     </table>
                 </div>
            </div>
        </div>
    );
};

export default AdCenter;
