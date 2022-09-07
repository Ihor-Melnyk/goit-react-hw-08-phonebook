import { Outlet } from 'react-router-dom';

export default function HomeView() {
  return (
    <div>
      <p>HomeView</p>
      <Outlet />
    </div>
  );
}
