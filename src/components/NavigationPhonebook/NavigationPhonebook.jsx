import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationPhonebook() {
  return (
    <div>
      <NavLink to="/contacts"> Список контактів</NavLink>
    </div>
  );
}
