import navlogo from "../../assets/images/more/logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#803D3B] font-rancho text-white">
      <div className="navbar lg:w-9/12 mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-2xl">
            <img className="w-10" src={navlogo} alt="" />
            <p>Espresso Emporium</p>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/register"
                className="bg-[#E3B577] p-3 rounded-md font-bold font-sans hover:bg-[#331A15] hover:shadow-lg hover:shadow-yellow-900 duration-700 cursor-pointer"
              >
                Register
              </Link>
            </li>
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="p-2 bg-[#803D3B] rounded-t-none flex flex-col gap-2 ">
                  <Link to="/" className="p-4">
                    <span>Home</span>
                  </Link>
                  <Link to="/users" className="p-4">
                    <span>Users</span>
                  </Link>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
