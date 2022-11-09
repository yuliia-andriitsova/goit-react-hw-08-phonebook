import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/operations';
import { Audio } from 'react-loader-spinner';

const ContactItem = ({ id, name, number, changeId, status, currentId }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
    changeId(id);
  };

  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      {status && id === currentId ? (
        <Audio
          height="20"
          width="20"
          color="green"
          radius="9"
          ariaLabel="loading"
        />
      ) : (
        <button type="button" onClick={onDeleteContact}>
          Delete
        </button>
      )}
    </li>
  );
};
export { ContactItem };
