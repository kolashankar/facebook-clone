import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#F0F2F5] flex flex-col md:flex-row items-center justify-center p-4 md:p-10 gap-8 md:gap-20">
            {/* Left Side: Branding */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
                <h1 className="text-[#0866FF] text-6xl font-bold mb-4 tracking-tighter">facebook</h1>
                <p className="text-2xl md:text-3xl leading-snug">
                    Connect with friends and the world around you on Facebook.
                </p>
            </div>

            {/* Right Side: Form */}
            <div className="w-full max-w-[396px] bg-white rounded-xl shadow-lg p-4">
                <form onSubmit={handleLogin} className="flex flex-col gap-3">
                    <input 
                        type="text" 
                        placeholder="Email or phone number" 
                        className="p-3.5 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-[#0866FF] focus:shadow-[0_0_0_2px_#e7f3ff]"
                        defaultValue="kola.shanakar@example.com"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="p-3.5 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-[#0866FF] focus:shadow-[0_0_0_2px_#e7f3ff]"
                        defaultValue="password123"
                    />
                    <button 
                        type="submit" 
                        className="bg-[#0866FF] text-white text-xl font-bold p-2.5 rounded-lg hover:bg-[#1877F2] transition-colors mt-1"
                    >
                        Log In
                    </button>
                    <a href="#" className="text-[#0866FF] text-center text-sm hover:underline my-2">Forgot password?</a>
                    <div className="h-[1px] bg-gray-300 my-2"></div>
                    <button 
                        type="button" 
                        className="bg-[#42B72A] text-white text-lg font-bold p-2.5 rounded-lg hover:bg-[#36A420] transition-colors w-fit mx-auto px-8"
                    >
                        Create new account
                    </button>
                </form>
                <div className="mt-6 text-center text-sm">
                    <span className="font-bold">Create a Page</span> for a celebrity, brand or business.
                </div>
            </div>
        </div>
    );
};

export default Login;
