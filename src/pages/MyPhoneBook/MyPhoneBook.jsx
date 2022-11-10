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
    <div>
      <PhoneBook />
      <h2> Contacts</h2>
      {isLoading && !error && <p> Request in progress...</p>}
      <Filter />
      <ContactList />
    </div>
  );
}
