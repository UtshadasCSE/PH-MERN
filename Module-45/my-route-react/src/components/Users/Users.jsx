import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Tatal users:{users.length} </h2>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user, idx) => (
          <User key={idx} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
