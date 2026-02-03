import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Send } from 'lucide-react';

const StoryViewer = ({ stories, initialStoryIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialStoryIndex);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Reset progress when index changes
        setProgress(0);
        
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    if (currentIndex < stories.length - 1) {
                        setCurrentIndex(prevIndex => prevIndex + 1);
                        return 0;
                    } else {
                        onClose();
                        return 100;
                    }
                }
                return prev + 1;
            });
        }, 50); // 5 seconds duration

        return () => clearInterval(timer);
    }, [currentIndex, stories.length, onClose]);

    const handleNext = () => {
        if (currentIndex < stories.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            onClose();
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const currentStory = stories[currentIndex];

    if (!currentStory) return null;

    return (
        <div className="fixed inset-0 z-[70] bg-black flex items-center justify-center">
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-20 cursor-pointer" onClick={onClose}>
                <X className="text-white w-8 h-8" />
            </div>

            {/* Facebook Logo */}
             <div className="absolute top-4 left-4 z-20">
                <svg viewBox="0 0 36 36" className="fill-current text-white" height="40" width="40">
                    <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 27.435v-9.4H10.74V18h3.26v-2.834c0-3.219 1.921-4.996 4.846-4.996 1.402 0 2.868.25 2.868.25V13.6h-1.616c-1.595 0-2.09.99-2.09 2.006V18h3.61l-.577 4.035h-3.033V36h2.17z"></path>
                </svg>
            </div>


            {/* Content Container */}
            <div className="relative h-full w-full md:w-[400px] bg-gray-900 flex flex-col">
                {/* Progress Bars */}
                <div className="absolute top-4 left-2 right-2 flex gap-1 z-10">
                    {stories.map((s, idx) => (
                        <div key={s.id} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                            <div 
                                className={`h-full bg-white transition-all duration-100 ease-linear ${idx === currentIndex ? '' : (idx < currentIndex ? 'w-full' : 'w-0')}`}
                                style={{ width: idx === currentIndex ? `${progress}%` : undefined }}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* User Info */}
                <div className="absolute top-8 left-4 flex items-center gap-3 z-10">
                    <img src={currentStory.img} className="w-10 h-10 rounded-full border-2 border-[#0866FF]" alt="" />
                    <span className="text-white font-semibold">{currentStory.user}</span>
                    <span className="text-white/70 text-sm">2h</span>
                </div>

                {/* Navigation Areas */}
                <div className="absolute inset-0 flex">
                     <div className="w-1/3 h-full cursor-pointer" onClick={handlePrev}></div>
                     <div className="w-2/3 h-full cursor-pointer" onClick={handleNext}></div>
                </div>

                 {/* Image */}
                <img src={currentStory.img} className="w-full h-full object-cover" alt="" />
                
                {/* Footer Input */}
                 <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-20">
                    <input 
                        type="text" 
                        placeholder="Reply..." 
                        className="bg-transparent border border-white/50 rounded-full py-2 px-4 text-white placeholder-white/70 w-full outline-none focus:border-white"
                    />
                    <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10">
                         <Heart className="text-white w-7 h-7" />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10">
                         <Send className="text-white w-6 h-6" />
                    </div>
                 </div>
            </div>

            {/* Desktop Navigation Arrows */}
            <button 
                className="hidden md:flex absolute left-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center text-white"
                onClick={handlePrev}
            >
                <ChevronLeft size={28} />
            </button>
            <button 
                className="hidden md:flex absolute right-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center text-white"
                onClick={handleNext}
            >
                <ChevronRight size={28} />
            </button>

        </div>
    );
};

export default StoryViewer;
