import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Mail className="mr-2 h-5 w-5" /> 
              Aman's e-Post Office
            </h3>
            <p className="mb-4 text-blue-200">Your one-stop shop for all postal needs. We provide quality postal products and services at competitive prices.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-blue-200 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=stamps" className="text-blue-200 hover:text-white transition-colors">Stamps</Link>
              </li>
              <li>
                <Link to="/products?category=postcards" className="text-blue-200 hover:text-white transition-colors">Postcards</Link>
              </li>
              <li>
                <Link to="/products?category=packets" className="text-blue-200 hover:text-white transition-colors">Packets</Link>
              </li>
              <li>
                <Link to="/products?category=cartons" className="text-blue-200 hover:text-white transition-colors">Cartons</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">All Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <span>123 Postal Avenue, Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-300" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-300" />
                <span>info@amanspostoffice.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Aman's e-Post Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;