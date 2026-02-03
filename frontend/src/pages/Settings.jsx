import React, { useState, useEffect } from 'react';
import { Moon, Shield, Lock, Bell, Globe, Key, List, Volume2, Video } from 'lucide-react';

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="flex min-h-screen bg-[#F0F2F5] dark:bg-[#18191A]">
             {/* Left Sidebar - Settings Menu */}
             <div className="hidden lg:block w-[360px] fixed top-14 left-0 bottom-0 bg-white dark:bg-[#242526] p-4 overflow-y-auto z-10 shadow-sm border-r border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold mb-6 dark:text-white">Settings & privacy</h1>
                
                <div className="space-y-1">
                    <MenuItem icon={<Shield size={24} />} text="Meta Accounts Center" subtext="Manage your connected experiences and account settings across Meta technologies." active />
                    <div className="h-4"></div>
                    <MenuItem icon={<Globe size={24} />} text="Language and region" />
                    <MenuItem icon={<Lock size={24} />} text="Privacy Checkup" />
                    <MenuItem icon={<Bell size={24} />} text="Notifications" />
                    <MenuItem icon={<List size={24} />} text="Activity Log" />
                    <MenuItem icon={<Volume2 size={24} />} text="Media" />
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:ml-[360px] max-w-[800px] mx-auto py-8 px-6">
                <div className="bg-white dark:bg-[#242526] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
                     <h2 className="text-xl font-bold mb-4 dark:text-white">Preferences</h2>
                     
                     {/* Dark Mode Toggle */}
                     <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
                         <div className="flex gap-3">
                             <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full h-fit">
                                <Moon size={24} className="dark:text-white" />
                             </div>
                             <div>
                                 <h3 className="font-bold text-lg dark:text-white">Dark Mode</h3>
                                 <p className="text-gray-500 text-sm">Adjust the appearance of Facebook to reduce glare and give your eyes a break.</p>
                             </div>
                         </div>
                         <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="sr-only peer" 
                                checked={darkMode}
                                onChange={() => setDarkMode(!darkMode)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0866FF]"></div>
                        </label>
                     </div>
                </div>

                <div className="bg-white dark:bg-[#242526] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                     <h2 className="text-xl font-bold mb-4 dark:text-white">Security and Login</h2>
                     
                     <div className="space-y-4">
                         <div className="flex gap-3 items-start cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                             <Key size={24} className="mt-1 text-gray-500" />
                             <div>
                                 <h3 className="font-semibold dark:text-white">Change password</h3>
                                 <p className="text-gray-500 text-sm">It&apos;s a good idea to use a strong password that you&apos;re not using elsewhere</p>
                             </div>
                         </div>
                         <div className="flex gap-3 items-start cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                             <Shield size={24} className="mt-1 text-gray-500" />
                             <div>
                                 <h3 className="font-semibold dark:text-white">Two-factor authentication</h3>
                                 <p className="text-gray-500 text-sm">We&apos;ll ask for a login code if we notice an attempted login from an unrecognized device or browser.</p>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

const MenuItem = ({ icon, text, subtext, active }) => (
    <div className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-[#F0F2F5] dark:bg-[#3A3B3C]' : 'hover:bg-[#F0F2F5] dark:hover:bg-[#3A3B3C]'}`}>
        <div className={`mt-1 ${active ? 'text-[#1877F2]' : 'text-black dark:text-white'}`}>
             {icon}
        </div>
        <div>
            <span className={`font-semibold text-[17px] ${active ? 'text-[#1877F2]' : 'text-black dark:text-white'}`}>{text}</span>
            {subtext && <p className="text-xs text-gray-500 mt-1 leading-snug">{subtext}</p>}
        </div>
    </div>
);

export default Settings;
