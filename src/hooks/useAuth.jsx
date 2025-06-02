import React, {createContext, useContext, useEffect, useState} from 'react';
const AuthContext=createContext();

export const AuthProvider=({children}) => {
    const [isLoggedIn, setLoggedIn]=useState(()=>{
        const saved=localStorage.getItem("isLoggedIn");
        return saved === 'true';
    });

    useEffect(()=>{
        localStorage.setItem("isLoggedIn",isLoggedIn);
    },[isLoggedIn]);

    return(
        <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
