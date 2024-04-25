import navlogo from "../../assets/images/more/logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#803D3B] font-rancho text-white">
      <nav className="flex justify-center items-center py-2 ">
        <Link to="/">
          {" "}
          <img className="w-14" src={navlogo} alt="" />
        </Link>
        <p className="text-3xl">Espresso Emporium</p>
      </nav>
    </div>
  );
};

export default Navbar;
