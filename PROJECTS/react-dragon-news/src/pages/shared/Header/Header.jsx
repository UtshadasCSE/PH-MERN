import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-4">
      <img src={logo} alt="" />
      <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
      <p className="text-black">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
