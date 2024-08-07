import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/images/icons/logofav.svg";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink className="font-montserrat" to="/news">
          News
        </NavLink>
      </li>
      <li>
        <NavLink className="font-montserrat" to="/destination">
          Destination
        </NavLink>
      </li>
      <li>
        <NavLink className="font-montserrat" to="/blog">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink className="font-montserrat" to="/contact">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <nav className="container mx-auto py-4">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl bg-slate-500">
              <img className="w-20" src={navLogo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <Link to="/login" className="btn bg-[#F9A51A]">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
