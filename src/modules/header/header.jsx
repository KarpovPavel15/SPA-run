import './header.scss';
import React from 'react';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.png';
import filter from '../../assets/filter-active.svg';
import filterActive from '../../assets/filter.png';
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
            <button className="header__filter-mobile"><img src={filter}/></button>
            <button className="header__filter-active"><img src={filterActive}/></button>
            <button className="header__menu"><img src={menu}/></button>
        </header>
    )
};
