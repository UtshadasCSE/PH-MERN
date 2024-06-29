import { Link, NavLink } from "react-router-dom";
import AuthBtn from "../../../components/AuthBtn/AuthBtn";
import logo from "../../../assets/icon/gklogo.png";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
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
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later",
        });
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-[#7209B7] border-b-2 border-[#F72585]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addproduct"}
          className={({ isActive }) =>
            isActive ? "text-[#7209B7] border-b-2 border-[#F72585]" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={"/myproduct"}
            className={({ isActive }) =>
              isActive ? "text-[#7209B7] border-b-2 border-[#F72585]" : ""
            }
          >
            My Product
          </NavLink>
        </li>
      )}

      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-[#7209B7] border-b-2 border-[#F72585]" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-[#7209B7] border-b-2 border-[#F72585]" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <nav>
        <div className="navbar bg-base-100 shadow-md font-poppins ">
          <div className="navbar-start px-9 max-sm:px-3">
            <Link to={"/"} className="text-xl font-bold max-sm:text-base w-20">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-2">{navLinks}</ul>
          </div>
          <div className="navbar-end px-9 max-sm:px-3">
            <div className="dropdown absolute z-30">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow w-max"
              >
                {navLinks}
                <Link to={"/signin"} className="">
                  <AuthBtn />
                </Link>
              </ul>
            </div>
            {user ? (
              <>
                {" "}
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button onClick={handleLogoutBtn}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                {" "}
                <Link to={"/signin"} className="max-sm:hidden">
                  <AuthBtn />
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
