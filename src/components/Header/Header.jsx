import Navigation from 'components/Navigation/Navigation';
import NavigationPhonebook from 'components/NavigationPhonebook/NavigationPhonebook';
import NavigationUserMenu from 'components/NavigationUserMenu/NavigationUserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { SlCallIn } from 'react-icons/sl';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <header>
      <NavLink className="link" to="/">
        Home <SlCallIn />
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavigationPhonebook />
          <NavigationUserMenu />
        </>
      ) : (
        <Navigation />
      )}
    </header>
  );
}
