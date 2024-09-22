import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";


const LynchpinContext = createContext();

// Create the provider component
export const LynchpinProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isTokenValid, setIsTokenValid] = useState(false);

    useEffect(() => {
        const lynchpin = typeof window !== 'undefined' ? localStorage.getItem('lynchpin') : null;

        if (lynchpin) {
            try {
                // Decode the JWT token to get the user object
                const decodedUser = jwtDecode(lynchpin);
                setUser(decodedUser);
                setIsTokenValid(true);
            } catch (error) {
                console.error('Invalid lynchpin token:', error);
                setIsTokenValid(false);
            }
        }
    }, []);

    return (
        <LynchpinContext.Provider value={{ user, isTokenValid }}>
            {children}
        </LynchpinContext.Provider>
    );
};

export const useUser = () => {
    return useContext(LynchpinContext);
};