import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/phonebook/selectors';
import { ContactItem } from './ContactItem';
import { useRef } from 'react';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const idRef = useRef();
  const isLoading = useSelector(state => state.contacts.isLoading);

  const changeId = id => {
    idRef.current = id;
  };

  return (
    <>
      <ul>
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
