import type { Route } from "../+types/root";

import { useLocation } from "react-router";

// params keyword will take in the dynamic link that you provided to go to the page
export default function UserHomepage({ params }: Route.ComponentProps) {
  // You can pass state from one route to another. You pass the data as an object to state attribute in the Link tag and in the other route, you can receive the data by using the useLocation hook.
  const location = useLocation();
  const { user } = location.state;

  console.log(user);

  return (
    <div>
      <p>User: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Id: {user.id}</p>
    </div>
  );
}
