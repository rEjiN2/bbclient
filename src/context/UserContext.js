"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loginuser, setLogin] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const isLogged = localStorage.getItem('login') === 'true';

        if (storedUser && isLogged) {
            setUser(JSON.parse(storedUser));
            setLogin(true);
        }
    }, []);

    const login = (userData) => {
        console.log(userData, "njn avnneda");
        setUser(userData);
        setLogin(true);
        
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('login', true);
    };

    const logout = async() => {
        setUser(null);
        setLogin(false);
        localStorage.removeItem('user');
        localStorage.removeItem('login');
        localStorage.removeItem('userId');
        const res = await fetch('/api/logout',{
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        })
        const response = await res.json()
    };

    return (
        <UserContext.Provider value={{ loginuser, user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
