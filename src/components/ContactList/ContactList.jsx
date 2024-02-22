import css from './ContactList.module.css';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ someContacts, setSomeContacts }) => {
  return (
    <ul className={css.contactList}>
      {someContacts.map(someContact => (
        <Contact
          key={someContact.id}
          someContact={someContact}
          setSomeContacts={setSomeContacts}
        />
      ))}
    </ul>
  );
};
