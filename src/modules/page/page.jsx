import { Header } from '../header';
import React  from 'react';
import { Routes } from '../../routes';
import { AuthContext } from '../../context';
import { useAuth } from '../../hooks/useAuth';

export const Page = () => {
    const {token,login,logout,getRoutes,routes} = useAuth();
    const isAuthorized = !!token;
    return (
        <div className="page">
            <AuthContext.Provider value={{token,login,logout,isAuthorized,getRoutes,routes}}>
                <Header isAuthorized={isAuthorized}/>
                <Routes isAuthorized={isAuthorized} routes={routes}/>
                <footer>
                    Footer
                </footer>
            </AuthContext.Provider>
        </div>
    )
};
