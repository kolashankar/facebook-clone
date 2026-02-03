import { createContext, useState, useContext } from 'react';
import { currentUser as mockUser } from '../mock';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // Auto-login with mock user - no authentication required
    const [user] = useState(mockUser);
    const [loading] = useState(false);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
