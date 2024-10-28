import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-light">Password Manager</h2>
            <p className="text-sm">© {new Date().getFullYear()} Nicomatic Explorer. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;