import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { productsData } from '../data/products';

const FeaturedProducts: React.FC = () => {
  // Get 4 featured products
  const featuredProducts = productsData
    .filter(product => product.featured)
    .slice(0, 4);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured Products</h2>
          <Link 
            to="/products" 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;