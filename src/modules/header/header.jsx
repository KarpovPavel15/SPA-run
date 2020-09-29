import './header.scss';
import React from 'react';
import logo from '../../assets/logo.svg';
import filter from '../../assets/filter-active.svg';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={logo}/>
            <nav className="header__nav">
                <div className="header__list">
                    <NavLink to="/jobs" className="header__nav-links" activeClassName="active">JOBS</NavLink>
                    <NavLink to="/info" className="header__nav-links" activeClassName="active">INFO</NavLink>
                    <NavLink to="/contact" className="header__nav-links" activeClassName="active">CONTACT US</NavLink>
                </div>
                <button className="header__filter"><img src={filter}/></button>
            </nav>
        </header>
    )
};
