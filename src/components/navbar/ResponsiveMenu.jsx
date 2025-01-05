import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLinks } from "./navbar"; // Ensure 'NavLinks' is the correct import name

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}
    >
      <div className="card p-6">
        <div className="flex items-center justify-start gap-3 mb-6">
          <FaUserCircle size={50} />
          <div>
            <h1 className="text-lg font-semibold">Hello Explorer</h1>
            <h1 className="text-sm text-gray-500 dark:text-gray-400">
              Premium user
            </h1>
          </div>
        </div>
        <nav className="mt-12 ">
          <ul className="space-y-4 text-xl">
            {NavLinks?.map((data, index) => (
              <li key={index}>
                <a
                  href={data.link}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <h1>~ Harshit Sharma</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
