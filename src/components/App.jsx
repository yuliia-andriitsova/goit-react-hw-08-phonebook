import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authSelectors from 'redux/auth/auth-selectors';
import { PhoneBook } from './PhoneBook';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { fetchContacts } from 'redux/phonebook/operations';
import { getIsLoading } from 'redux/phonebook/selectors';
import { getError } from 'redux/phonebook/selectors';
import Navigation from './Navigation/Navigation';
// import RegistrationForm from 'pages/RegistrationForm/RegistrationForm';
// import LoginForm from 'pages/LoginForm/LoginForm';
// import MyPhoneBook from 'pages/MyPhoneBook/MyPhoneBook';
import NavigationPhonebook from './NavigationPhonebook/NavigationPhonebook';
import Header from './Header/Header';
import PrivatRoute from './PrivatRoute/PrivatRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { getCurrentUser } from 'redux/auth/auth-operations';

const RegistrationForm = lazy(() =>
  import('pages/RegistrationForm/RegistrationForm')
);
const LoginForm = lazy(() => import('pages/LoginForm/LoginForm'));
const MyPhoneBook = lazy(() => import('pages/MyPhoneBook/MyPhoneBook'));

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        alignItems: 'center',
        fontSize: 15,
        color: '#010101',
        gap: 10,
        border: '2 px solid red',
        padding: '50px',
      }}
    >
      <Header />
      <Suspense fallback={<p>Loading......</p>}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Route>

          <Route path="/" element={<PrivatRoute />}>
            <Route path="/contacts" element={<MyPhoneBook />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export { App };
