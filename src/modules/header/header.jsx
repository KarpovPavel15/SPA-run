import './header.scss';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.png';
import filter from '../../assets/filter-active.svg';
import { NavLink, useHistory } from "react-router-dom";
import filterActive from '../../assets/filter.png';

export const Header = ({isAuthorized}) => {
    let history = useHistory();
    const [state, setHandler] = useState(false);
    const filterHandler = () => history.location.pathname !== '/jobs' ? setHandler(false) : setHandler(!state);
    return (
        <header>
            <div className="header">
                <NavLink to="/"><img className="header__logo" src={logo}/></NavLink>
                {isAuthorized &&
                <div>
                    <nav className="header__nav">
                        <div className="header__list">
                            <NavLink to="/jobs" className="header__nav-links" activeClassName="active">JOBS</NavLink>
                            <NavLink to="/info" className="header__nav-links" activeClassName="active">INFO</NavLink>
                            <NavLink to="/contact" className="header__nav-links" activeClassName="active">CONTACT
                                US</NavLink>
                        </div>
                        {state === false
                            ? <button className="header__filter" onClick={filterHandler}><img src={filter}/></button>
                            :
                            <button className="header__filter-active" onClick={filterHandler}><img src={filterActive}/>
                            </button>
                        }
                    </nav>
                </div>
                }
                <button className="header__filter-mobile"><img src={filter}/></button>
                <button className="header__menu"><img src={menu}/></button>
            </div>
            {state &&
            <div className="header__filter-menu filter-menu">
                <div className="filter-menu__left">
                    <div className="filter-menu__text">
                        Date from
                    </div>
                    <input className="filter-menu__input" type="datetime-local"/>
                </div>
                <div className="filter-menu__right">
                    <div className="filter-menu__text">
                        Date to
                    </div>
                    <input className="filter-menu__input" type="datetime-local"/>
                </div>
            </div>
            }
        </header>

    )
};
