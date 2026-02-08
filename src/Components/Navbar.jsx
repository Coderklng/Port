import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50 p-3">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="font-bold text-2xl">Logo</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link className="hover:text-orange-600" to="/">Home</Link></li>
          <li><Link className="hover:text-orange-600" to="/about">About</Link></li>
          <li><Link className="hover:text-orange-600" to="/service">Service</Link></li>
          <li><Link className="hover:text-orange-600" to="/portfolio">Portfolio</Link></li>
          <li>
            <Link className="bg-sky-700 px-4 py-2 text-white rounded hover:bg-sky-900" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
          aria-label="Toggle Menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <ul className={`${open ? "block" : "hidden"} md:hidden flex flex-col space-y-4 px-4 pt-4 pb-2 bg-white border-t`}>
        <li><Link className="hover:text-orange-600" to="/">Home</Link></li>
        <li><Link className="hover:text-orange-600" to="/about">About</Link></li>
        <li><Link className="hover:text-orange-600" to="/service">Service</Link></li>
        <li><Link className="hover:text-orange-600" to="/portfolio">Portfolio</Link></li>
        <li>
          <Link className="block bg-sky-700 px-4 py-2 text-white rounded hover:bg-sky-900" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
