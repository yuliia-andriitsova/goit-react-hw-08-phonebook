import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const activeClassName = ({ isActive }) => (isActive ? 'active' : 'link');
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink to="/register" className={activeClassName}>
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={activeClassName}>
            log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
