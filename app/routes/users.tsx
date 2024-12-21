import { Link } from "react-router";

// loader loads data before the component is rendered. There are two types of loaders, normal ones and client
export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await response.json();

  return await response.json();
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function Users({ loaderData }: { loaderData: User[] }) {
  return (
    <div>
      <h3 className='text-xl font-bold'>Default User Page</h3>

      <ul className='flex flex-col gap-2'>
        {loaderData.map((user) => {
          return (
            <li key={user.id}>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                <Link
                  to={`/users/${user.name}`}
                  state={{ user }}
                >
                  {user.name}
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
