import { PhoneBook } from './PhoneBook';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { fetchContacts } from 'redux/phonebook/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoading } from 'redux/phonebook/selectors';
import { getError } from 'redux/phonebook/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
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
      <PhoneBook />
      <h2> Contacts</h2>
      {isLoading && !error && <p> Request in progress...</p>}
      <Filter />
      <ContactList />
    </div>
  );
};

export { App };
