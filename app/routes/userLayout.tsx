import { Outlet } from "react-router";

export default function UserLayout() {
  return (
    <section className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Users</h1>

      <Outlet />
    </section>
  );
}
