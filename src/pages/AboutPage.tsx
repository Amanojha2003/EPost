import React from 'react';
import { Mail, User, Award, Shield, Truck, CreditCard, MessageSquare } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Aman's e-Post Office</h1>
              <p className="text-lg text-gray-600 mb-6">
                Your one-stop digital portal for all postal needs. We're committed to providing high-quality postal products and services with convenience and customer satisfaction as our top priorities.
              </p>
              <div className="flex items-center text-blue-600">
                <Mail className="h-5 w-5 mr-2" />
                <span className="font-medium">Serving since 2022</span>
              </div>
            </div>
            <div className="h-64 md:h-auto">
              <img
                src="https://images.pexels.com/photos/4549408/pexels-photo-4549408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Aman's e-Post Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <p className="text-gray-600 mb-4">
              Aman's e-Post Office was founded with a simple yet powerful vision: to bring the convenience of postal services to the digital age. In an increasingly connected world, we recognized the need for a comprehensive online platform that could provide all postal services under one roof.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small online store for stamps and postcards has grown into a full-fledged e-commerce platform offering a wide range of postal products and services, from courier services to utility bill payments.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, reliability, and customer satisfaction has been the cornerstone of our growth. We continue to innovate and expand our offerings to meet the evolving needs of our customers.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-700 text-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-blue-100 mb-6">
              To provide high-quality postal products and services with unmatched convenience, reliability, and customer satisfaction, making postal services accessible to everyone in the digital age.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Reliable delivery services nationwide</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>High-quality postal products at competitive prices</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Exceptional customer service and support</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To be the leading digital postal services platform, revolutionizing how people access and use postal services, setting new standards for convenience, reliability, and customer experience.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Expanding our services to reach every corner of the country</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Innovating and incorporating the latest technologies</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Building long-lasting relationships with our customers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Customer First</h3>
              <p className="text-gray-600">
                We prioritize our customers' needs and strive to exceed their expectations in every interaction.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">
                We uphold the highest standards of quality in our products, services, and customer interactions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, ensuring dependable service that customers can count on.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Competitive Pricing</h3>
                    <p className="text-gray-600">
                      We offer the same prices as physical branches, ensuring you get the best value for your money.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Fast & Reliable Delivery</h3>
                    <p className="text-gray-600">
                      Our nationwide delivery network ensures your packages reach their destination on time, every time.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Secure Transactions</h3>
                    <p className="text-gray-600">
                      Your data and payment information are protected with the latest security measures.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Exceptional Customer Support</h3>
                    <p className="text-gray-600">
                      Our dedicated support team is always ready to assist you with any queries or concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-lg shadow-sm p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore our wide range of postal products and services. Whether you're looking to buy stamps or send a package, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/products"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors shadow-sm"
            >
              Shop Products
            </a>
            <a
              href="/services"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Check: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export default AboutPage;