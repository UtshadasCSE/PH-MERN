import { useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
  const allUsers = useLoaderData();
  const [users, setUsers] = useState(allUsers);
  const handleDeleteBtn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const reamingUsers = users.filter((user) => user._id !== _id);
            setUsers(reamingUsers);
          });
      }
    });
  };
  return (
    <div className="bg-[#DEAC80]">
      <div className="w-4/5 mx-auto py-16">
        <div className="flex justify-center p-9">
          <h2 className="text-4xl text-white font-black font-rancho">
            Expresso Emporium Users
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table bg-[#AF8260] text-white p-6 w-3/5 mx-auto">
            {/* head */}
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.FirstName}</td>
                  <td>{user.LastName}</td>
                  <td>{user.email}</td>
                  <td>{user.createAt}</td>
                  <td className="flex gap-2">
                    <button className="bg-slate-600 p-3 rounded-lg ">
                      <FaPen className="text-xl text-black hover:text-white duration-500 " />
                    </button>
                    <button
                      onClick={() => handleDeleteBtn(user._id)}
                      className=" bg-red-400 p-3 rounded-lg"
                    >
                      <MdDeleteForever className="text-2xl text-red-500 hover:text-white duration-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
