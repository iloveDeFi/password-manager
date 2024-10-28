import React from 'react';
import { Link } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-950 text-white shadow-md rounded-[50px] p-4 mt-1">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-2xl font-light">
          <Link to="/home" className="flex items-center m-2 text-white hover:text-gray-300">
            <RiLockPasswordLine className='pr-2' />
            Password Manager
          </Link>
        </div>
        <div className="text-xl space-x-4 sm:space-x-8 lg:space-x-12">
          <Link 
            to="/home" 
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Home
          </Link>
          <Link 
            to="/register" 
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Register
          </Link>
          <Link 
            to="/login" 
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Login
          </Link>
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] rounded-lg inline-block">
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
              Download
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;