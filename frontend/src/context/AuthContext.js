import { createContext, useState, useEffect, useContext } from 'react';
import axios from '../api/axios';
import { currentUser as mockUser } from '../mock';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for token and initialize auth state
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        
        if (token && userData) {
            setAuth({ token });
            setUser(JSON.parse(userData));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/auth/token', 
                new URLSearchParams({ username: email, password: password }),
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );

            const token = response.data.access_token;
            // Decode token to get user info (or use the one returned if we modified backend to return user obj)
            // Our backend returns token which has "sub" (email), "id", "name", "pic" encoded.
            // We can decode it, or just fetch /me.
            // Let's decode simply base64 for now or just fetch /me.
            
            localStorage.setItem('token', token);
            setAuth({ token });
            
            // Fetch full user details
            const userRes = await axios.get('/auth/me', {
                headers: { Authorization: `Bearer ${token}` }
            });
            
            setUser(userRes.data);
            localStorage.setItem('user', JSON.stringify(userRes.data));
            
            return true;
        } catch (error) {
            console.error("Login failed", error);
            throw error;
        }
    };

    const register = async (name, email, password) => {
        try {
            await axios.post('/auth/register', {
                name,
                email,
                password,
                profile_pic: mockUser.profilePic // Use mock pic for new users
            });
            return await login(email, password);
        } catch (error) {
            console.error("Registration failed", error);
            throw error;
        }
    }

    const logout = () => {
        setAuth({});
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ auth, user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
