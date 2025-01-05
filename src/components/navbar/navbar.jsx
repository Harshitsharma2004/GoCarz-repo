import React, { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
export const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/#hero",
  },
  {
    id: "2",
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: "3",
    name: "CARS",
    link: "/#carlist",
  },

  {
    id: "4",
    name: "BOOKING",
    link: "/#contact",
  },
];
const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const togglemenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-serif">GoCarZ</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div>
              {theme === "dark" ? (
                <IoSunnyOutline
                  className="text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <IoMdMoon
                  className="text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
            </div>
            <div className="md:hidden">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={togglemenu}
                  size={30}
                  className="cursor-pointer transition-all "
                />
              ) : (
                <HiMenuAlt3
                  onClick={togglemenu}
                  size={30}
                  className="cursor-pointer transition-all "
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
