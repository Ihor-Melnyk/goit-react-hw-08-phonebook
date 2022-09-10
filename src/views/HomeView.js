import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export default function HomeView() {
  const { name } = useSelector(state => state.user);
  return (
    <div>
      <h1>
        Hello! <span>{name}</span>
      </h1>

      <p>
        Welcome to the site PhoneBook, to view your contacts, go to the page{' '}
        <a href="./Contacts">Contacts</a>
      </p>

      <Outlet />
    </div>
  );
}
