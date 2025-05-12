import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Clock, Calendar, CheckCircle } from 'lucide-react';
import { servicesData } from '../data/services';
import { useCart } from '../context/CartContext';
import ServiceCard from '../components/ServiceCard';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-28 pb-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/services"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Browse Services
          </Link>
        </div>
      </div>
    );
  }

  // Find related services in the same category
  const relatedServices = servicesData
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      image: service.image,
      type: 'service',
    });
  };

  const handleBookNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </button>
        </div>

        {/* Service Details */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Service Image */}
            <div className="p-6 flex items-center justify-center bg-gray-50">
              <img
                src={service.image}
                alt={service.name}
                className="max-w-full max-h-[400px] object-contain rounded-lg"
              />
            </div>

            {/* Service Info */}
            <div className="p-6 md:p-8">
              <div className="mb-2">
                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{service.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">4.0 (18 reviews)</span>
              </div>

              <div className="text-2xl font-bold text-blue-800 mb-4">₹{service.price.toFixed(2)}</div>

              <div className="flex items-center text-gray-600 mb-4">
                <Clock className="h-5 w-5 mr-2 text-gray-500" />
                <span>Duration: {service.duration}</span>
              </div>

              <div className="mb-6">
                <p className="text-gray-600">{service.description}</p>
              </div>

              {/* Service Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
                <ul className="space-y-2">
                  {service.features && service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={handleBookNow}
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedServices.map((relatedService) => (
                <ServiceCard
                  key={relatedService.id}
                  id={relatedService.id}
                  name={relatedService.name}
                  price={relatedService.price}
                  image={relatedService.image}
                  description={relatedService.description}
                  duration={relatedService.duration}
                  category={relatedService.category}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;