import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login, register } = useAuth();
    
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        name: 'Kola Shanakar',
        email: 'kola@example.com',
        password: 'password'
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        
        try {
            if (isRegistering) {
                await register(formData.name, formData.email, formData.password);
            } else {
                await login(formData.email, formData.password);
            }
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.detail || 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm">{error}</div>}
                    
                    {isRegistering && (
                         <input 
                            type="text" 
                            name="name"
                            placeholder="Full name" 
                            className="p-3.5 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-[#0866FF]"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    )}

                    <input 
                        type="text" 
                        name="email"
                        placeholder="Email or phone number" 
                        className="p-3.5 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-[#0866FF]"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        className="p-3.5 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-[#0866FF]"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="bg-[#0866FF] text-white text-xl font-bold p-2.5 rounded-lg hover:bg-[#1877F2] transition-colors mt-1 disabled:opacity-70"
                    >
                        {isLoading ? 'Loading...' : (isRegistering ? 'Sign Up' : 'Log In')}
                    </button>
                    
                    {!isRegistering && <a href="#" className="text-[#0866FF] text-center text-sm hover:underline my-2">Forgot password?</a>}
                    
                    <div className="h-[1px] bg-gray-300 my-2"></div>
                    
                    <button 
                        type="button" 
                        onClick={() => setIsRegistering(!isRegistering)}
                        className={`text-white text-lg font-bold p-2.5 rounded-lg transition-colors w-fit mx-auto px-8
                        ${isRegistering ? 'bg-gray-500 hover:bg-gray-600' : 'bg-[#42B72A] hover:bg-[#36A420]'}`}
                    >
                        {isRegistering ? 'Already have an account?' : 'Create new account'}
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
