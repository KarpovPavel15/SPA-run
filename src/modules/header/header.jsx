import './header.scss';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import logoMobile from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import filter from '../../assets/filter-active.svg';
import { NavLink, useHistory } from "react-router-dom";
import filterActive from '../../assets/filter.png';

export const Header = ({isAuthorized, setFirstValue, setSecondValue}) => {
    let history = useHistory();
    const [state, setHandler] = useState(false);
    const filterHandler = () => history.location.pathname !== '/jobs' ? setHandler(false) : setHandler(!state);

    const firstInputHandler = event => event.currentTarget.value.length === 10 || event.currentTarget.value.length === 0 ? setFirstValue(event.currentTarget.value) : null;
    const secondInputHandler = event => event.currentTarget.value.length === 10 || event.currentTarget.value.length === 0 ? setSecondValue(event.currentTarget.value) : null;

    return (
        <header>
            <div className="header">
                <NavLink className="header__logo" to="/jobs"><img className="header__logo" src={logo}/></NavLink>
                <NavLink to="/jobs"><img className="header__logo-mobile" src={logoMobile}/></NavLink>
                {isAuthorized &&
                <div className="header__options">
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
                {
                    state === false
                        ? <button className="header__filter-mobile" onClick={filterHandler}><img src={filter}/></button>
                        : <button className="header__filter-active-mobile" onClick={filterHandler}><img src={filterActive}/>
                        </button>
                }

                <button className="header__menu"><img src={menu}/></button>
            </div>
            {state &&
            <div className="header__filter-menu filter-menu">
                <div className="filter-menu__left">
                    <div className="filter-menu__text">
                        Date from
                    </div>
                    <input type="text" onChange={firstInputHandler} className="filter-menu__input"/>
                </div>
                <div className="filter-menu__right">
                    <div className="filter-menu__text">
                        Date to
                    </div>
                    <input type="text" onChange={secondInputHandler} className="filter-menu__input"/>
                </div>
            </div>
            }
        </header>
    )
};
