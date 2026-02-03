
export const currentUser = {
  id: "u1",
  name: "Kola Shanakar",
  profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80", 
  coverPic: "https://images.unsplash.com/photo-1534067783741-512d69f63778?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  bio: "Living life one code at a time 💻 | Foodie 🍕 | Traveler ✈️",
  work: "Software Engineer at TechCorp",
  education: "Studied Computer Science at IIT Bombay",
  location: "Mumbai, Maharashtra",
  hometown: "Pune, India",
  relationship: "Single",
  joined: "September 2015",
  followers: 1205
};

export const stories = [
  { id: 1, user: "Kola Shanakar", img: currentUser.profilePic, isUser: true },
  { id: 2, user: "Rahul Sharma", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60" },
  { id: 3, user: "Priya Singh", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60" },
  { id: 4, user: "Amit Patel", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60" },
  { id: 5, user: "Sneha Gupta", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60" },
];

export const posts = [
  {
    id: 1,
    userId: "u1",
    user: "Kola Shanakar",
    profilePic: currentUser.profilePic,
    time: "2h",
    content: "Just finished a great hiking trip! The view was absolutely breathtaking. 🏔️ #Nature #Hiking #WeekendVibes",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=60",
    likes: 45,
    comments: 12,
    shares: 5,
  },
  {
    id: 2,
    userId: "u2",
    user: "Rahul Sharma",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
    time: "4h",
    content: "Excited to announce my new role as Senior Developer! 🚀 Big things coming.",
    likes: 128,
    comments: 45,
    shares: 10,
  },
  {
    id: 3,
    userId: "u1",
    user: "Kola Shanakar",
    profilePic: currentUser.profilePic,
    time: "1d",
    content: "Does anyone have recommendations for the best pizza places in Mumbai? 🍕 Craving some authentic wood-fired pizza!",
    likes: 22,
    comments: 34,
    shares: 0,
  },
    {
    id: 4,
    userId: "u3",
    user: "Priya Singh",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60",
    time: "2d",
    content: "Sunset vibes 🌅",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop&q=60",
    likes: 210,
    comments: 18,
    shares: 2,
  }
];

export const friends = [
    { id: 1, name: "Rahul Sharma", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60", mutual: 12 },
    { id: 2, name: "Priya Singh", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60", mutual: 5 },
    { id: 3, name: "Amit Patel", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60", mutual: 8 },
    { id: 4, name: "Sneha Gupta", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60", mutual: 15 },
    { id: 5, name: "Vikram Malhotra", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60", mutual: 2 },
    { id: 6, name: "Anjali Rao", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60", mutual: 9 },
    { id: 7, name: "Rohan Das", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=60", mutual: 4 },
    { id: 8, name: "Kavita Krishnan", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=60", mutual: 7 },
    { id: 9, name: "Arjun Reddy", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60", mutual: 11 },
];

export const contacts = [
    { id: 1, name: "Rahul Sharma", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60", active: true },
    { id: 2, name: "Priya Singh", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60", active: true },
    { id: 3, name: "Amit Patel", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60", active: false },
    { id: 4, name: "Sneha Gupta", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60", active: true },
];

export const videos = [
    {
        id: 1,
        title: "Incredible Street Food in Mumbai! 🥪",
        channel: "Foodie Adventures",
        views: "1.2M views",
        time: "3 days ago",
        videoUrl: "https://www.youtube.com/embed/H0d8-1r3a8Y?autoplay=0&mute=1",
        avatar: "https://picsum.photos/50?random=1"
    },
    {
        id: 2,
        title: "React JS Crash Course 2025 ⚛️",
        channel: "Code Master",
        views: "500K views",
        time: "1 week ago",
        videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=0&mute=1",
        avatar: "https://picsum.photos/50?random=2"
    },
    {
        id: 3,
        title: "Top 10 Places to Visit in India 🇮🇳",
        channel: "Travel Diaries",
        views: "2.5M views",
        time: "2 weeks ago",
        videoUrl: "https://www.youtube.com/embed/IgAnj6r1O48?autoplay=0&mute=1",
        avatar: "https://picsum.photos/50?random=3"
    }
];

export const groups = [
    { id: 1, name: "React Developers India", members: "25K members", img: "https://picsum.photos/200/200?random=20", joined: true },
    { id: 2, name: "Mumbai Foodies", members: "120K members", img: "https://picsum.photos/200/200?random=21", joined: true },
    { id: 3, name: "Tech Startup Founders", members: "15K members", img: "https://picsum.photos/200/200?random=22", joined: false },
    { id: 4, name: "Travel Backpackers", members: "50K members", img: "https://picsum.photos/200/200?random=23", joined: true },
    { id: 5, name: "Dog Lovers Club", members: "8K members", img: "https://picsum.photos/200/200?random=24", joined: false },
    { id: 6, name: "Photography Enthusiasts", members: "30K members", img: "https://picsum.photos/200/200?random=25", joined: true },
];

export const events = [

export const memories = [
    { id: 1, year: "1 year ago", content: "Trip to Goa with friends! 🏖️", img: "https://picsum.photos/400/300?random=40", date: "August 12, 2024" },
    { id: 2, year: "3 years ago", content: "Graduation Day 🎓", img: "https://picsum.photos/400/300?random=41", date: "August 12, 2022" },
];

export const savedItems = [
    { id: 1, type: "Video", title: "React 19 Features Explained", source: "Code Master", img: "https://picsum.photos/100/100?random=50" },
    { id: 2, type: "Post", title: "Best Pizza in Mumbai", source: "Mumbai Foodies", img: "https://picsum.photos/100/100?random=51" },
    { id: 3, type: "Marketplace", title: "MacBook Air M1", source: "Marketplace", img: "https://picsum.photos/100/100?random=52" },
];

export const managedPages = [
    { id: 1, name: "Kola's Coding Blog", category: "Blogger", likes: 1205, img: "https://picsum.photos/200/200?random=60" },
    { id: 2, name: "Mumbai Tech Meetups", category: "Community", likes: 5400, img: "https://picsum.photos/200/200?random=61" },
];

export const chats = [
    { id: 1, name: "Rahul Sharma", lastMsg: "See you tomorrow! 👋", time: "10:30 AM", unread: true, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60" },
    { id: 2, name: "Priya Singh", lastMsg: "Did you check the PR?", time: "Yesterday", unread: false, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60" },
    { id: 3, name: "Amit Patel", lastMsg: "The meeting is rescheduled.", time: "Mon", unread: false, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60" },
    { id: 4, name: "Sneha Gupta", lastMsg: "Thanks for the help!", time: "Sun", unread: true, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60" },
    { id: 5, name: "Vikram Malhotra", lastMsg: "Ok, cool.", time: "Sat", unread: false, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60" },
];

export const messages = [
    { id: 1, sender: "Rahul Sharma", text: "Hey Kola, are you free this weekend?", isUser: false, time: "10:28 AM" },
    { id: 2, sender: "Kola Shanakar", text: "Yeah, I think so. What's up?", isUser: true, time: "10:29 AM" },
    { id: 3, sender: "Rahul Sharma", text: "Planning a trek to Lonavala. Wanna join?", isUser: false, time: "10:30 AM" },
    { id: 4, sender: "Kola Shanakar", text: "Sounds awesome! Count me in.", isUser: true, time: "10:30 AM" },
    { id: 5, sender: "Rahul Sharma", text: "See you tomorrow! 👋", isUser: false, time: "10:30 AM" },
];

export const fundraisers = [
    { id: 1, title: "Help Stray Dogs in Mumbai", raised: "₹1,20,000", goal: "₹2,00,000", img: "https://picsum.photos/400/200?random=70" },
    { id: 2, title: "Education for Underprivileged Kids", raised: "₹5,50,000", goal: "₹10,00,000", img: "https://picsum.photos/400/200?random=71" },
    { id: 3, title: "Medical Relief for Flood Victims", raised: "₹80,000", goal: "₹1,00,000", img: "https://picsum.photos/400/200?random=72" },
];

export const adCampaigns = [
    { id: 1, name: "Summer Sale Promo", status: "Active", reach: "12.5K", spent: "₹5,000", clicks: 450 },
    { id: 2, name: "New Product Launch", status: "Review", reach: "0", spent: "₹0", clicks: 0 },
    { id: 3, name: "Brand Awareness", status: "Completed", reach: "50K", spent: "₹15,000", clicks: 1200 },
];



    { id: 1, title: "Tech Meetup 2025", date: "SAT, AUG 12", location: "WeWork Andheri", img: "https://picsum.photos/400/200?random=30", interested: 120 },
    { id: 2, title: "Music Festival", date: "SUN, SEP 05", location: "Jio Garden", img: "https://picsum.photos/400/200?random=31", interested: 5000 },
    { id: 3, title: "Startup Pitch Night", date: "FRI, AUG 18", location: "BKC", img: "https://picsum.photos/400/200?random=32", interested: 45 },
    { id: 4, title: "Photography Walk", date: "SUN, AUG 20", location: "Colaba Causeway", img: "https://picsum.photos/400/200?random=33", interested: 80 },
];

    {
        id: 3,
        title: "Top 10 Places to Visit in India 🇮🇳",
        channel: "Travel Diaries",
        views: "2.5M views",
        time: "2 weeks ago",
        videoUrl: "https://www.youtube.com/embed/IgAnj6r1O48?autoplay=0&mute=1",
        avatar: "https://picsum.photos/50?random=3"
    }
];

export const games = [
    { id: 1, title: "Ludo King", players: "10M+ playing", img: "https://picsum.photos/200/200?random=10" },
    { id: 2, title: "Candy Crush", players: "5M+ playing", img: "https://picsum.photos/200/200?random=11" },
    { id: 3, title: "8 Ball Pool", players: "2M+ playing", img: "https://picsum.photos/200/200?random=12" },
    { id: 4, title: "Subway Surfers", players: "8M+ playing", img: "https://picsum.photos/200/200?random=13" },
    { id: 5, title: "Chess Master", players: "1M+ playing", img: "https://picsum.photos/200/200?random=14" },
    { id: 6, title: "Word Links", players: "500K playing", img: "https://picsum.photos/200/200?random=15" },
];
