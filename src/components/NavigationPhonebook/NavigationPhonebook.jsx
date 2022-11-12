import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationPhonebook() {
  return (
    <div>
      <NavLink className="link" to="/contacts">
        Contacts
      </NavLink>
    </div>
  );
}
