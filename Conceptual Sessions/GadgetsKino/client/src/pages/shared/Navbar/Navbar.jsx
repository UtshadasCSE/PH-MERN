import { Link, NavLink } from "react-router-dom";
import AuthBtn from "../../../components/AuthBtn/AuthBtn";
import logo from "../../../assets/icon/gklogo.png";

const Navbar = () => {
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
                <Link to={"/login"} className="">
                  <AuthBtn />
                </Link>
              </ul>
            </div>
            <Link to={"/login"} className="max-sm:hidden">
              <AuthBtn />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
