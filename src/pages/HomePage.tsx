import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import FeaturedServices from '../components/FeaturedServices';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Announcement */}
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm md:text-base font-medium">
            Special offer: Free shipping on orders above ₹1000! Limited time only.
          </p>
        </div>
      </div>
      
      <FeaturedProducts />
      <FeaturedServices />
      
      {/* About Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About Aman's e-Post Office" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">About Aman's e-Post Office</h2>
              <p className="text-gray-600 mb-4">
                Aman's e-Post Office is your one-stop digital portal for all postal needs. We offer a wide range of postal products and services, from stamps and postcards to courier services and utility bill payments.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to provide high-quality postal products and services at competitive prices, with convenience and customer satisfaction as our top priorities.
              </p>
              <Link 
                to="/about" 
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Visit Our Store</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to see you in person at our physical location or get in touch with us through any of the following means.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">123 Postal Avenue, Delhi, India 110001</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@amanspostoffice.com</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon-Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;