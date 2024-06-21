"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blogs",
    },
  ];
  const handleRedirect = () => {
    router.push("/login");
  };
  return (
    <div>
      <nav className="bg-green-700">
        <ul className="flex justify-center gap-3 px-6 py-3 ">
          {navLinks?.map((links) => (
            <Link
              href={links.path}
              className={`${
                pathName === links.path
                  ? "bg-red-600 hover:underline"
                  : "hover:underline"
              }`}
            >
              {links.title}
            </Link>
          ))}
        </ul>
        <button onClick={handleRedirect} className="p-3 bg-gray-400 rounded-xl">
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
