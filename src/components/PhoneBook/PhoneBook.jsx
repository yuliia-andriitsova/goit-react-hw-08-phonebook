import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebook/operations';
import { getContacts } from 'redux/phonebook/selectors';

export function PhoneBook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleAddContact = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts `);
    }

    dispatch(addContact({ name, number }));
  };

  const onChangeName = event => {
    const { value } = event.target;
    setName(value);
  };
  const onChangeNumber = event => {
    const { value } = event.target;
    setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label> Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className="btnSubmit" type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
