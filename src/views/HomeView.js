import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export default function HomeView() {
  const { name } = useSelector(state => state.user);
  const { token } = useSelector(state => state.user);
  return (
    <div>
      {token ? (
        <>
          <h1>
            Hello! <span>{name}</span>
          </h1>
          <p>
            Welcome to the site PhoneBook, to view your contacts, go to the page{' '}
            <a href="./Contacts">Contacts</a>
          </p>
        </>
      ) : (
        <>
          <h1>
            Hello! <span>Guest</span>
          </h1>
          <p>
            Welcome to the PhoneBook website, you need to{' '}
            <a href="./login">LogIn</a> or <a href="./register">Register</a>
          </p>
        </>
      )}

      <Outlet />
    </div>
  );
}
