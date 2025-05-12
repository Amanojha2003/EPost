import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Mail, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}
  `;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-blue-800 hover:text-blue-600 transition-colors"
          >
            <Mail className="h-8 w-8" />
            <span className="text-xl font-bold">Aman's e-Post Office</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            
            <div className="relative">
              <Link 
                to="/cart" 
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
              >
                <ShoppingCart className="h-5 w-5 text-blue-800" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link 
              to="/cart" 
              className="p-2 mr-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5 text-blue-800" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="mobile-nav-link">Home</Link>
              <Link to="/products" className="mobile-nav-link">Products</Link>
              <Link to="/services" className="mobile-nav-link">Services</Link>
              <Link to="/about" className="mobile-nav-link">About</Link>
              <Link to="/contact" className="mobile-nav-link">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;