import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/services';

const FeaturedServices: React.FC = () => {
  // Get 4 featured services
  const featuredServices = servicesData
    .filter(service => service.featured)
    .slice(0, 4);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Popular Services</h2>
          <Link 
            to="/services" 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              name={service.name}
              price={service.price}
              image={service.image}
              description={service.description}
              duration={service.duration}
              category={service.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;