import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [themes, setThemes] = useState("light");
  const handleThemes = (e) => {
    if (e.target.checked) {
      setThemes("synthwave");
    } else {
      setThemes("light");
    }
  };
  // save the theme in the local storage
  useEffect(() => {
    localStorage.setItem("theme", themes);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }),
    [themes];
  console.log(themes);
  return (
    <div>
      <nav className="h-16">
        <div className="navbar bg-base-100 shadow-lg px-9 fixed z-10">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold gap-0 text-secondary normal-case">
              Byte<span className="text-primary">Blaze</span>
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 flex gap-4  font-semibold">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "font-bold"
                }
              >
                Home
              </NavLink>

              <NavLink
                to={"/blogs"}
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "font-bold"
                }
              >
                Blogs
              </NavLink>

              <NavLink
                to={"/bookmarks"}
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : "font-bold"
                }
              >
                Bookmarks
              </NavLink>
            </ul>
            {/* theme button  */}
            <label className="flex cursor-pointer gap-2 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                onChange={handleThemes}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
