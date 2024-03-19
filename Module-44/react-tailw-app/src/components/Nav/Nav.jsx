import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navbarRoutes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Product" },
    { id: 4, path: "/services", name: "Services" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <div>
      <nav className="p-5">
        <div onClick={() => setOpen(!open)}>
          {open === true ? (
            <HiMenuAlt2 className="text-2xl lg:hidden" />
          ) : (
            <MdOutlineClose className="text-2xl lg:hidden " />
          )}
        </div>
        <ul
          className={`
          ${open ? "hidden" : ""}
          flex max-sm:flex-col absolute max-sm:bg-green-300 rounded-md px-2`}
        >
          {navbarRoutes.map((route) => (
            <Link key={route.id} route={route} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
