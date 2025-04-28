import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

const Navbar = ({ isStickyTrue }: any) => {
  const [isSticky, setIsSticky] = useState(isStickyTrue || false);

  useEffect(() => {
    if (isStickyTrue) {
      return;
    }
    const handleScroll = () => {
      const scrollThreshold = 450;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header
        className={`bg-white z-50 w-full transition-all duration-500 ease-in-out ${
          isSticky ? "fixed top-0 shadow-md" : ""
        }`}
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div
            className={`flex items-center justify-between ${
              isSticky ? "h-16 lg:h-[7rem] py" : "h-16 lg:h-[72px]"
            } transition-all duration-500 ease-in-out`}
          >
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
              <a href="#" title="" className="inline-flex">
                <span className="sr-only">Rareblocks logo</span>
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/logo.svg"
                  alt=""
                />
              </a>
            </div>

            {/* Navigation Links (only show when not sticky) */}
            {!isSticky && (
              <div className="hidden  lg:flex lg:items-center lg:ml-16 xl:ml-24 lg:space-x-8">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Contact us
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Customer Support
                </a>
              </div>
            )}

            {/* Header Component (only show when sticky) */}
            {isSticky && (
              <div className="hidden sm:inline shadow-xl ml-10 rounded-full w- transform transition-all duration-500 ease-in-out">
                <Header />
              </div>
            )}

            {/* Icons */}
            <div className="flex items-center justify-end ml-auto space-x-2 sm:space-x-5">
              <button
                type="button"
                className="p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="p-2 -m-2 text-gray-500 transition-all duration-200 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
