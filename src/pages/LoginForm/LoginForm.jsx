import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChangeEmail = event => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChangePassword = event => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleChange = event => {
    const { value } = event.target;
    if (event.target.name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Введіть пошту
        <input
          value={email}
          type="email"
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Введіть пароль
        <input
          value={password}
          type="password"
          onChange={handleChange}
          name="password"
        />
      </label>
      <button type="submit">Увійти</button>
    </form>
  );
};

export default LoginForm;
