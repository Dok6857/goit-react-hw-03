// import css from './ContactList.module.css';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ someContacts, setSomeContacts }) => {
  return (
    <ul>
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
