import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/applied">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#7E90FE0D] ">
      <nav className="container mx-auto py-4">
        <div className="navbar">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#7E90FE0D] rounded-box w-52 text-[#757575]"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl font-extrabold">CareerHub</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-[#757575]">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-[#7E90FE] text-[#FFFFFF] font-bold hover:bg-[#5356FF] duration-700 hover:shadow-xl hover:shadow-[#7E90FE]">
              Star Applying
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
