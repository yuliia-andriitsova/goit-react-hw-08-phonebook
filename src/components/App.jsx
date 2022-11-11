import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import Home from './Home/Home';
import PrivatRoute from './PrivatRoute/PrivatRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { getCurrentUser } from 'redux/auth/auth-operations';
import Layout from './Layout/Layout';

const RegistrationForm = lazy(() =>
  import('pages/RegistrationForm/RegistrationForm')
);
const LoginForm = lazy(() => import('pages/LoginForm/LoginForm'));
const MyPhoneBook = lazy(() => import('pages/MyPhoneBook/MyPhoneBook'));

const App = () => {
  const dispatch = useDispatch();

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
        fontSize: 12,
        color: '#010101',
        gap: 10,
        border: '2 px solid red',
        // padding: '50px',
      }}
    >
      <Layout>
        <Suspense fallback={<p>Loading......</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<PublicRoute />}>
              <Route path="register" element={<RegistrationForm />} />
              <Route path="login" element={<LoginForm />} />
            </Route>

            <Route path="/" element={<PrivatRoute />}>
              <Route path="contacts" element={<MyPhoneBook />} />
            </Route>
          </Routes>
        </Suspense>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Layout>
    </div>
  );
};

export { App };
