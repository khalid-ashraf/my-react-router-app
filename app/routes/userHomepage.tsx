import { useParams } from "react-router";
import type { Route } from "../+types/root";

// export function clientLoader({params}) {

// }

// params keyword will take in the dynamic link that you provided to go to the page
export default function UserHomepage({ params }: Route.ComponentProps) {
  console.log(params);
  return (
    <div>
      <p>User: {params.username}</p>
    </div>
  );
}
