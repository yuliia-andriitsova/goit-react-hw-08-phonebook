import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, resetPassword] = useState('');
  const dispatch = useDispatch();

  const handleChangeName = event => {
    const { value } = event.target;
    setName(value);
  };
  const handleChangeEmail = event => {
    const { value } = event.target;
    setEmail(value);
  };
  const handleChangePassword = event => {
    const { value } = event.target;
    setPassword(value);
  };
  const handleChangeRepassword = event => {
    const { value } = event.target;
    resetPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input value={name} type="text" onChange={handleChangeName} />
      </label>
      <label>
        Email
        <input value={email} type="email" onChange={handleChangeEmail} />
      </label>
      <label>
        Password
        <input
          value={password}
          type="password"
          onChange={handleChangePassword}
        />
      </label>
      <label>
        Password
        <input
          value={repassword}
          type="password"
          onChange={handleChangeRepassword}
        />
      </label>
      <button type="submit" className="btnSubmit">
        Sign up
      </button>
    </form>
  );
};

export default RegistrationForm;
