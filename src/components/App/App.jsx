import ContactList from '../ContactList/ContactList';
import { useState } from 'react';
import Filter from '../Filter';
import ContactForm from '../Form/Form';
import style from './App.module.scss';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactSlice';

export const App = () => {
  const [filter, setFilter] = useState('');
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  function getFilterContact() {
    const normalizedFilter = filter.toLowerCase();

    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <div className={style.container}>
      <div className={style.img}></div>
      <h1 className={style.titlePrimary}>Phonebook</h1>
      <ContactForm contacts={data} />
      <h2 className={style.titleSecondary}>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      {isFetching && <p>Loading contacts...</p>}
      {data && (
        <ContactList contacts={getFilterContact()} onDelete={deleteContact} />
      )}
    </div>
  );
};
