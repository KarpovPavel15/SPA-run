import { createContext } from 'react';

export const AuthContext = createContext({
    token: null,
    routes: null,
    login: ()=>{},
    logout: ()=>{},
    getRoutes: ()=>{},
    isAuthenticated: false
});
