import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

export default function NavigationUserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);
  const goHome = () => {
    dispatch(authOperations.logOut());
    navigate('/');
  };

  return (
    <div className="navigationUserMenu">
      <p> Hello {name}</p>
      <p> {email}</p>
      <button onClick={goHome} type="button">
        Log out
      </button>
    </div>
  );
}
