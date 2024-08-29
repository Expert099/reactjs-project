import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ openModal }) => {
  return (
    <header className="bg-[#123b6a] text-yellow-400">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">
          <Link to="/" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            Conference Expense Planner
          </Link>
        </div>
        <nav className="flex space-x-6">
          <a href="#venue" className="text-white hover:text-yellow-300 transition-colors duration-300">Venue</a>
          <a href="#addons" className="text-white hover:text-yellow-300 transition-colors duration-300">Add-ons</a>
          <a href="#meals" className="text-white hover:text-yellow-300 transition-colors duration-300">Meals</a>
        </nav>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-semibold py-2 px-4 rounded transition-colors duration-300"
          onClick={openModal}
        >
          Show Details
        </button>
      </div>
    </header>
  );
};

export default Header;
