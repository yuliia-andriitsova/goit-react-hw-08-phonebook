import Navigation from 'components/Navigation/Navigation';
import NavigationPhonebook from 'components/NavigationPhonebook/NavigationPhonebook';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <header>
      <h1>Welcome, this is home page </h1>
      {isLoggedIn ? (
        <>
          {/* <PhoneBook />
          <h2> Contacts</h2>
          {isLoading && !error && <p> Request in progress...</p>}
          <Filter />
          <ContactList /> */}
          <NavigationPhonebook />
        </>
      ) : (
        <Navigation />
      )}
      <button onClick={() => dispatch(authOperations.logOut())} type="button">
        Вихід
      </button>
    </header>
  );
}
