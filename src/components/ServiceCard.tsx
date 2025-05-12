import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Info, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ServiceCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  duration: string;
  category: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  name,
  price,
  image,
  description,
  duration,
  category,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      type: 'service',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration}</span>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-800 font-bold">₹{price.toFixed(2)}</span>
          
          <div className="flex space-x-2">
            <Link 
              to={`/services/${id}`} 
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Info className="h-5 w-5 text-gray-700" />
            </Link>
            
            <button
              onClick={handleAddToCart}
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 text-blue-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;