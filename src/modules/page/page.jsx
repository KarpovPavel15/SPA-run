import { Header } from '../header';
import React, { useEffect, useState } from 'react';
import { Routes } from '../../routes';
import { AuthContext } from '../../context';
import { useAuth } from '../../hooks/useAuth';

export const Page = () => {
    const {token, login, logout, getRoutes, routes} = useAuth();
    const isAuthorized = !!token;
    const [firstValueInput, setFirstValueInput] = useState("");
    const [secondValueInput, setSecondValueInput] = useState("");

    let firstValueToDate = new Date(firstValueInput.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    let secondValueToDate = new Date(secondValueInput.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));


    let newRoutes = [];
    const setFirstValue = value => setFirstValueInput(value);
    const setSecondValue = value => setSecondValueInput(value);

    if (firstValueInput.length > 0 && secondValueInput.length === 0) {
        routes.forEach(el => {
            let date = new Date(el.data.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
            if (date >= firstValueToDate) {
                newRoutes.push(el)
            }
        })
    }
    if (secondValueInput.length > 0 && firstValueInput.length === 0) {
        routes.forEach(el => {
            let date = new Date(el.data.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
            if (date <= secondValueToDate) {
                newRoutes.push(el)
            }
        })
    }
    if (secondValueInput.length > 0 && firstValueInput.length > 0) {
        routes.forEach(el => {
            let date = new Date(el.data.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
            if (date <= secondValueToDate && date>=firstValueToDate) {
                newRoutes.push(el)
            }
        })
    }
    return (
        <div className="page">
            <AuthContext.Provider value={{token, login, logout, isAuthorized, getRoutes, routes}}>
                <Header isAuthorized={isAuthorized} setFirstValue={setFirstValue} setSecondValue={setSecondValue}/>
                <Routes isAuthorized={isAuthorized} routes={routes} newRoutes={newRoutes}/>
                <footer>
                    Footer
                </footer>
            </AuthContext.Provider>
        </div>
    )
};
