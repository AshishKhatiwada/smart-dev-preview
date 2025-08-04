import React, { useState } from "react";

const Navbar = ({ onMenuClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Sectors",
    "Products",
    "Articles",
    "Supplier",
    "Affiliate",
    "Reviews",
    "Contact",
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (item) => {
    onMenuClick(item);
    setIsMobileMenuOpen(false); // close mobile menu after clicking
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold text-blue-700">
          SmartDev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleMenuClick(item)}
              className="hover:text-blue-600 focus:outline-none"
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:inline-block">
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Join as Supplier
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // X icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 border-t border-gray-200">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleMenuClick(item)}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              {item}
            </button>
          ))}
          <a
            href="#"
            className="block bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Join as Supplier
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
