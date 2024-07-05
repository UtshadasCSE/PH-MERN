import { Link, NavLink } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navlinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-b-[#E63946]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-b-[#E63946]" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-b-[#E63946]" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <>
          <li>
            <NavLink
              to={"/signin"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-[#E63946]"
                  : "bg-[#A8DADC] text-[#E63946]"
              }
            >
              <IoIosLogIn />
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  // logout btn
  const handleLogoutBtn = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully logout from this device!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later",
        });
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg container px-4 mx-auto font-poppins mb-2 rounded-b-xl ">
        <div className="flex-1">
          <Link to={"/"} className="flex gap-2 items-center">
            <img
              className="w-auto h-7"
              src="https://i.ibb.co/9VdmNg8/joblogo.png"
              alt=""
            />
            <span className="font-bold">
              JobFinder <span className="text-[#E63946]">BD</span>
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex  gap-2">{navlinks}</ul>

          <div className="dropdown dropdown-end z-50">
            {user && (
              <>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full" title="">
                    <img
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <div className="justify-between">Add Job</div>
                  </li>
                  <li>
                    <div>My Posted Jobs</div>
                  </li>
                  <li>
                    <div>My Bids</div>
                  </li>
                  <li>
                    <div>Bid Requests</div>
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={handleLogoutBtn}
                      className="bg-gray-200 block text-center"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
