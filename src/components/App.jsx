import './App.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useEffect, useState } from 'react';
import { SearchBox } from './SearchBox/SearchBox';

export function App() {
  const storedContacts = window.localStorage.getItem('someContacts');

  const [someContacts, setSomeContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  useEffect(() => {
    window.localStorage.setItem('someContacts', JSON.stringify(someContacts));
  }, [someContacts]);

  const [filter, setFilter] = useState('');

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
  };

  const filteredContacts = someContacts.filter(someContact =>
    someContact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm setSomeContacts={setSomeContacts} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList
        someContacts={filteredContacts}
        setSomeContacts={setSomeContacts}
      />
    </div>
  );
}
