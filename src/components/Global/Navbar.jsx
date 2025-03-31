import React, { useState, useEffect } from "react";
import { FaTicketAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 top-0 left-1/2 w-full transform -translate-x-1/2 px-6 py-4 flex items-center justify-between shadow-md transition-all duration-300 min-h-[75.5px] ${
          isScrolled ? "bg-white bg-opacity-90 backdrop-blur-md" : "bg-gray-100"
        }`}
      >
        <button className="flex items-center active:scale-90 duration-300">
          <FaTicketAlt className="text-xl text-black" />
          <h1 className="mx-2 font-bold">SiEvent</h1>
        </button>

        <div className="hidden lg:flex items-center space-x-8">
          <button className="text-black font-medium text-sm hover:text-gray-600 transition duration-300 active:scale-90">
            Discover
          </button>
          <button className="text-black font-medium text-sm hover:text-gray-600 transition duration-300 active:scale-90">
            Harga
          </button>
          <button className="text-black font-medium text-sm hover:text-gray-600 transition duration-300 active:scale-90">
            Help
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <button className="border border-black rounded-full px-5 py-2 font-medium text-black text-sm transition hover:bg-black hover:text-white active:scale-90 duration-300">
            Register
          </button>
          <button className="bg-black text-white rounded-full px-5 py-2 font-medium text-sm transition hover:bg-gray-200 hover:text-black hover:border hover:border-black active:scale-90 duration-300">
            Login
          </button>
        </div>

        <button className="lg:hidden text-xl text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-200 shadow-lg p-6 transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="flex items-center active:scale-90 duration-300 mb-6">
          <FaTicketAlt className="text-xl text-black" />
          <h1 className="mx-2 font-bold">SiEvent</h1>
        </button>

        <ul className="space-y-4">
          <li>
           <button className="text-black font-medium text-sm hover:text-gray-600 transition duration-300 active:scale-90">
            Discover
           </button>
          </li>
          <li>
           <button className="text-black font-medium text-sm hover:text-gray-600 transition duration-300 active:scale-90">
            My Events
           </button>
          </li>
          <li>
           <button className="text-black font-medium text-sm hover:text-gray-600 transition duration-300 active:scale-90">
            Help
           </button>
          </li>
        </ul>

        <div className="mt-6 flex flex-col space-y-2">
          <button className="border border-black text-black py-2 rounded-full font-medium transition hover:bg-black hover:text-white active:scale-90 duration-300">
            Register
          </button>
          <button className="bg-black text-white py-2 rounded-full font-medium transition hover:bg-gray-200 hover:text-black border border-black active:scale-90 duration-300">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
