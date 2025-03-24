import React, { useState, useEffect } from "react";
import { FaSearch, FaTicketAlt, FaBars, FaTimes } from "react-icons/fa";

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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div
        className={`fixed z-50 top-0 left-1/2 w-full max-w-6xl transform -translate-x-1/2 px-6 py-4 flex items-center justify-between rounded-lg shadow-lg transition-all duration-300 min-h-[75.5px] ${
          isScrolled ? "bg-white bg-opacity-90 backdrop-blur-md" : "bg-gray-200"
        }`}
      >
        <button className="flex items-center active:scale-90 duration-300">
          <FaTicketAlt className="text-xl text-black" />
        </button>

        <div className="hidden lg:flex items-center space-x-4">
          <button
            className="text-black font-medium text-sm hover:text-gray-600 transition duration-300"
          >
            Event
          </button>
          <button
            className="text-black font-medium text-sm hover:text-gray-600 transition duration-300"
          >
            Bantuan
          </button>

          <div className="flex items-center bg-black rounded-full px-3 py-1.5 w-[400px]">
            <input
              type="text"
              placeholder="Cari event disini ..."
              className="bg-black text-white outline-none placeholder-gray-400 flex-1 px-3 py-1 rounded-full text-xs"
            />
            <button className="bg-gray-500 p-2 rounded-full text-white border border-white transition-all duration-300 hover:bg-black hover:opacity-80 active:scale-90">
              <FaSearch className="text-sm" />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-3">
              <button
                className="border border-black rounded-full px-5 py-2 font-medium text-black text-sm transition hover:bg-black hover:text-white active:scale-90 duration-300 flex justify-center items-center"
              >
                Register
              </button>
              <button
                className="bg-black text-white rounded-full px-5 py-2 font-medium text-sm transition hover:bg-gray-200 hover:text-black hover:border hover:border-black active:scale-90 duration-300"
              >
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
        className={`fixed bottom-0 left-0 w-full bg-gray-200 rounded-t-2xl shadow-lg p-6 transition-transform duration-300 z-50 ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 transition"
        >
          <FaTimes />
        </button>
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <ul className="space-y-4">
          <li>
            <button
              className="flex justify-between items-center text-black hover:text-gray-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Event 
            </button>
          </li>
          <li>
            <button
              className="flex justify-between items-center text-black hover:text-gray-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Bantuan 
            </button>
          </li>
        </ul>

        <div className="flex items-center bg-black rounded-full px-3 py-1.5 mt-5 transition-all duration-300">
          <input
            type="text"
            placeholder="Cari event disini ..."
            className="bg-black text-white outline-none placeholder-gray-400 flex-1 px-3 py-1 rounded-full text-xs"
          />
          <button className="bg-gray-500 p-2 rounded-full text-white border border-white transition-all duration-300 hover:bg-black hover:opacity-80 active:scale-90">
            <FaSearch className="text-sm" />
          </button>
        </div>

        <div className="mt-6 flex justify-between">
              <button className="w-1/2 border border-black text-black py-2 rounded-full font-medium transition hover:bg-black hover:text-white active:scale-90 duration-300 flex justify-center items-center">
                Register
              </button>
              <button to="/login" className="w-1/2 bg-black text-white py-2 rounded-full font-medium transition hover:bg-gray-200 hover:text-black border border-black ml-2 active:scale-90 duration-300 flex justify-center items-center">
                Login
              </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
