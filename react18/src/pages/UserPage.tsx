import { Outlet } from 'react-router-dom';

export function UserPage() {
  return (
    <>
      <main>
        UserPage
        <br />
        <Outlet></Outlet>
      </main>
    </>
  );
}
