import './root-page.scss'
import React, { useContext } from 'react';
import beer from '../../assets/bear-face.svg'
import beerMobile from '../../assets/bearFace.png'
import { NavLink } from 'react-router-dom';
import { useHttp } from '../../hooks';
import { AuthContext } from '../../context';

export const RootPage = () => {
    const {request} = useHttp();
    const auth = useContext(AuthContext);
    const loginHandler = async () => {
        try {
            const data = await request('http://localhost:5000/api/auth/login');
            auth.login(data.token);
            auth.getRoutes(data.userRoutes)
        } catch (e) {
            console.error(e)
        }

    };
    return (
        <main className="rootPage">
            <div className="rootPage__login-area">
                <img className="rootPage__beer" src={beer}/>
                <img className="rootPage__beer-mobile" src={beerMobile}/>
                <NavLink className="rootPage__login-btn" to="/jobs" onClick={loginHandler}>Let me in</NavLink>
            </div>
        </main>
    )
};
