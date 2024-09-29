import React from "react";

const Header = () => {
  return (
    <header className="bg-[#222222] text-white p-4 px-36">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="logo text-2xl font-bold">
          Camera Store
        </a>
        <ul className="flex space-x-6">
          <li className="relative group">
            <a href="#" className="hover:text-yellow-400">
              Home
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 z-50 mt-2 hidden group-hover:block bg-white text-gray-800 py-4 px-6 space-y-2 shadow-xl rounded-xl transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 transform group-hover:translate-y-1">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg hover:text-gray-600 transition duration-300"
                >
                  Submenu 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg hover:text-gray-600 transition duration-300"
                >
                  Submenu 2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
