import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const allUsers = useLoaderData();
  const [users, setUsers] = useState(allUsers);
  const handleDeleteBtn = (_id) => {
    fetch(`http://localhost:3000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted");
          const reaminigUser = users.filter((user) => user._id !== _id);
          setUsers(reaminigUser);
        }
      });
  };
  return (
    <div className="h-screen flex flex-col justify-center gap-5  w-2/4 mx-auto ">
      {users.map((user) => (
        <p key={user._id}>
          {user.name}:{user.email}
          <Link
            to={`/update/${user._id}`}
            className="btn bg-orange-400 p-3 rounded-lg"
          >
            Update
          </Link>
          <button
            onClick={() => handleDeleteBtn(user._id)}
            className="btn bg-red-400 p-3 rounded-lg"
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Users;
