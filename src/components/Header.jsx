import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-transparent items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-2xl font-bold text-white flex items-center gap-1">
          <span className="text-emerald-400 text-3xl leading-none">••</span>
          webiso
        </div>
      </div>
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden" onClick={toggleMenu}>
        <button className="text-white">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <a href="#" className="text-white hover:text-emerald-400">
          Homepage
        </a>
        <a href="#" className="text-emerald-400">
          About us
        </a>
        <a href="#" className="text-white hover:text-emerald-400">
          Services
        </a>
        <a href="#" className="text-white hover:text-emerald-400">
          Project
        </a>
        <a href="#" className="text-white hover:text-emerald-400">
          Contact us
        </a>
        <a href="#" className="text-white hover:text-emerald-400">
          Pages
        </a>
      </div>

      {/* Get Started Button */}
      <button className="px-6 py-2 bg-emerald-400 text-white rounded-full hover:bg-emerald-500 transition-colors">
        Get Started
      </button>
    </nav>
  );
};

export default Header;
