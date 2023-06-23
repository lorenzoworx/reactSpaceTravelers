import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import planet from '../Images/planet.png';

const Navigation = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="navBar">
      <div>
        <img src={planet} alt="logo" className="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul>
        <li>
          <NavLink exact to="/" isActive={() => pathname === '/'} className={pathname === '/' ? 'activeLink' : ''}>
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/missions" isActive={() => pathname === '/missions'} className={pathname === '/missions' ? 'activeLink' : ''}>
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink to="/dragons" isActive={() => pathname === '/dragons'} className={pathname === '/dragons' ? 'activeLink' : ''}>
            Dragons
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" isActive={() => pathname === '/profile'} className={pathname === '/profile' ? 'activeLink' : ''}>
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
