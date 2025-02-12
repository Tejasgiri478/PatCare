import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="flex-shrink-0 text-lg font-semibold">PetCare</div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/shop" className="hover:text-blue-200">Shop</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {/* Toggle between Hamburger (fa-bars) and Close (fa-times) icon */}
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when isMenuOpen is true) */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-blue-500 text-white py-4`}>
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/shop" className="hover:text-blue-200">Shop</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
