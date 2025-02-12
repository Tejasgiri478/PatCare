import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
    <header className="flex justify-between items-center p-4 bg-gray-100">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img 
          src="../src/assets/images/PatCare1.png"
          alt="Pet Store Logo"
          className="w-10 md:w-12"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-2 w-full max-w-xl">
        <input
          type="text"
          placeholder="Search for pets, food, or accessories"
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Search
        </button>
      </div>
    </header>
    <Navbar />
    </>
);
};

export default Header;
