import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/missions" activeClassName="active">
            Missions
          </NavLink>
        </li>
        {teamHasThreeMembers && (
          <li>
            <NavLink to="/dragons" activeClassName="active">
              Dragons
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/profile" activeClassName="active">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
