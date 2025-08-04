import React from "react";

const Navbar = ({ onMenuClick }) => {
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

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold text-blue-700">
          SmartDev
        </a>

        {/* Menu - Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => onMenuClick(item)}
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

        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
