import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="flex gap-4 underline">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Header;
