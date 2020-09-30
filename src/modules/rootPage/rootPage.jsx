import './root-page.scss'
import React from 'react';
import beer from '../../assets/bear-face.svg'
import { NavLink } from 'react-router-dom';

export const RootPage = () => {
  return (
      <main className="rootPage">
          <div className="rootPage__login-area">
              <img src={beer}/>
              <NavLink className="rootPage__login-btn" to="/jobs">Let me in</NavLink>
          </div>
      </main>
  )
};
