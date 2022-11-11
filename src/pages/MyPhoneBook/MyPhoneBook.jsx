import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { PhoneBook } from 'components/PhoneBook';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/phonebook/selectors';
import { getError } from 'redux/phonebook/selectors';

export default function MyPhoneBook() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <div className="myPhoneBook">
      <div>
        <h2 className="contactsTitle"> Add contact</h2>
        <PhoneBook />
        {isLoading && !error && <p> Request in progress...</p>}
        <Filter />
      </div>

      <div>
        <h2 className="contactsTitle"> Contacts</h2>
        <ContactList />
      </div>
    </div>
  );
}
