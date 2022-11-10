import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/register"> Реєстрація</NavLink>
        </li>
        <li>
          <NavLink to="/login"> Авторизація</NavLink>
        </li>
      </ul>
    </nav>
  );
}
