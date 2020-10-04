import { useCallback, useEffect, useState } from 'react';

const storageName = "userData";
const storageUserRoutes = "userRoutes";

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [routes, setRoutes] = useState(null);

    const login = useCallback(jwtToken => {
        setToken(jwtToken);
        localStorage.setItem(storageName, JSON.stringify(jwtToken));
    }, []);

    const getRoutes = userRoutes => {
        setRoutes(userRoutes);
        localStorage.setItem(storageUserRoutes, JSON.stringify(userRoutes));
    };

    const logout = useCallback(() => {
        setToken(null);
        localStorage.removeItem(storageName)
    }, []);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem(storageName));
        const routes = JSON.parse(localStorage.getItem(storageUserRoutes));
        if (token && routes) {
            login(token);
            getRoutes(routes);
        }
    }, []);

    return {login, logout, token, getRoutes, routes}
};
