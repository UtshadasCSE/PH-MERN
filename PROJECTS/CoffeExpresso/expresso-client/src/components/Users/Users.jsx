import { useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const Users = () => {
  const allUsers = useLoaderData();
  console.log(allUsers);
  return (
    <div className="bg-[#DEAC80]">
      <div className="w-9/12 mx-auto py-24">
        <div className="overflow-x-auto">
          <table className="table bg-[#AF8260] text-white p-6 w-3/5 mx-auto">
            {/* head */}
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Oprations</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.FirstName}</td>
                  <td>{user.LastName}</td>
                  <td>{user.email}</td>
                  <td>{user.createAt}</td>
                  <td className="flex gap-2">
                    <button className="bg-slate-600 p-3 rounded-lg ">
                      <FaPen className="text-xl text-black " />
                    </button>
                    <button className=" bg-red-400 p-3 rounded-lg">
                      <MdDeleteForever className="text-2xl text-red-500" />
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
