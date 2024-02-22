import css from './Contact.module.css';
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
    <li className={css.listItem}>
      <div className={css.test}>
        <div className={css.contactInfo}>
          <FaUser size={24} />
          <p>{someContact.name}</p>
        </div>

        <div className={css.phoneInfo}>
          <FaPhoneAlt size={24} />
          <p>{someContact.number}</p>
        </div>
      </div>

      <button
        id={someContact.id}
        type="button"
        onClick={handleDelete}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};
