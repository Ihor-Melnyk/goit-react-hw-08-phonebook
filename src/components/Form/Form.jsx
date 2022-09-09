import { useState } from 'react';
import style from './Form.module.scss';
import { useCreateContactMutation } from 'redux/contacts/contactApi';

export default function ContactForm({ contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const createContact = useCreateContactMutation;

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const NewContact = {
      name: name,
      number: number,
    };

    // const normalizedName = NewContact.name.toLowerCase();
    // const checkedForName = contacts.find(
    //   contact => normalizedName === contact.name.toLowerCase()
    // );

    // if (checkedForName) {
    //   return alert(`${NewContact.name} is already in contacts`);
    // }
    console.log(NewContact);
    console.log(createContact);

    // createContact(NewContact);
    reset();
  };

  const reset = e => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={style.label}>
        Phone
        <input
          className={style.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
