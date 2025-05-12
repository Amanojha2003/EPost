import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, Mail, CreditCard } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="pt-24 pb-10 md:pt-28 md:pb-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Welcome to Aman's e-Post Office
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Your one-stop destination for all postal services and products. 
              From stamps to courier services, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors shadow-md"
              >
                Shop Products
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/7319083/pexels-photo-7319083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Post Office Services"
              className="rounded-lg shadow-2xl object-cover h-96 w-full"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center text-center">
            <Package className="h-8 w-8 mb-3" />
            <h3 className="font-semibold mb-1">Postal Products</h3>
            <p className="text-sm text-blue-100">High-quality stamps, postcards & more</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center text-center">
            <Truck className="h-8 w-8 mb-3" />
            <h3 className="font-semibold mb-1">Fast Delivery</h3>
            <p className="text-sm text-blue-100">Reliable courier service nationwide</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center text-center">
            <Mail className="h-8 w-8 mb-3" />
            <h3 className="font-semibold mb-1">Utility Services</h3>
            <p className="text-sm text-blue-100">Bill payments & registrations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center text-center">
            <CreditCard className="h-8 w-8 mb-3" />
            <h3 className="font-semibold mb-1">Secure Payments</h3>
            <p className="text-sm text-blue-100">Safe & secure transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;