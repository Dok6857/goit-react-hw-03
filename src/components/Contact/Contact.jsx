// import css from './Contact.module.css'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';

export const Contact = ({ someContact, setSomeContacts }) => {
  const handleDelete = evt => {
    const idToDelete = evt.target.id;

    setSomeContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== idToDelete)
    );
  };

  return (
    <li>
      <FaPhoneAlt size={24} /> <p>{someContact.name}</p>
      <FaUser size={24} /> <p>{someContact.number}</p>
      <button id={someContact.id} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
