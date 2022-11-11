import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/phonebook/selectors';
import { ContactItem } from './ContactItem';
import { useEffect, useRef } from 'react';
import { fetchContacts } from 'redux/phonebook/operations';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const idRef = useRef();
  const isLoading = useSelector(state => state.contacts.isLoading);

  const changeId = id => {
    idRef.current = id;
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul className="contactList">
        {contacts.map(contact => (
          <ContactItem
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
            status={isLoading}
            changeId={changeId}
            currentId={idRef.current}
          />
        ))}
      </ul>
    </>
  );
};
export { ContactList };
