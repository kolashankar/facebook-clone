import React from 'react';
import { MapPin } from 'lucide-react';

const Marketplace = () => {
    const items = [
        { id: 1, title: "iPhone 13 Pro Max - 128GB", price: "₹65,000", loc: "Mumbai", img: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&auto=format&fit=crop&q=60" },
        { id: 2, title: "Sofa Set 3+2", price: "₹12,000", loc: "Andheri West", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60" },
        { id: 3, title: "Royal Enfield Classic 350", price: "₹1,40,000", loc: "Bandra", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop&q=60" },
        { id: 4, title: "MacBook Air M1", price: "₹55,000", loc: "Powai", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60" },
        { id: 5, title: "Study Table", price: "₹2,500", loc: "Thane", img: "https://images.unsplash.com/photo-1519219788971-8d9797e0928e?w=500&auto=format&fit=crop&q=60" },
        { id: 6, title: "DSLR Camera Canon", price: "₹35,000", loc: "Navi Mumbai", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60" },
        { id: 7, title: "Gaming Chair", price: "₹8,000", loc: "Malad", img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&auto=format&fit=crop&q=60" },
        { id: 8, title: "Guitar Acoustic", price: "₹4,000", loc: "Dadar", img: "https://images.unsplash.com/photo-1550985543-f4423c9d7481?w=500&auto=format&fit=crop&q=60" },
    ];

    return (
        <div className="p-4 bg-[#F0F2F5] min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Marketplace</h1>
                <button className="bg-[#E4E6EB] px-3 py-2 rounded-full font-semibold text-sm">
                    Selling
                </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map(item => (
                    <div key={item.id} className="cursor-pointer group">
                        <div className="rounded-lg overflow-hidden aspect-square bg-white mb-2 relative">
                            <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="" />
                        </div>
                        <div className="font-semibold text-lg">{item.price}</div>
                        <div className="text-[15px] leading-tight mb-0.5">{item.title}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin size={12} />
                            {item.loc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
