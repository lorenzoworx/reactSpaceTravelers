import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../Images/planet.png';

const Navigation = () => (
  <nav className="navBar">
    <div>
      <img src={planet} alt="logo" className="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <ul>
      <li>
        <NavLink to="/">
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/missions">
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink to="/dragons">
          Dragons
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile">
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
