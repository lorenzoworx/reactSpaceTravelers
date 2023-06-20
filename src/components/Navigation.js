import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
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
