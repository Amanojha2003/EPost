import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';
import { Search, Filter, X } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || '';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Get unique categories
  const categories = ['all', ...new Set(productsData.map(p => p.category))];

  useEffect(() => {
    let filtered = productsData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, priceRange]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setPriceRange([0, 1000]);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Products</h1>
          <p className="text-gray-600 mt-2">
            Browse our wide range of postal products including stamps, postcards, packets, and cartons.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center mb-4 gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors flex items-center"
            >
              <X className="h-4 w-4 mr-1" />
              Reset Filters
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <Filter className="h-4 w-4 mr-1" />
              <span>Filter by:</span>
            </div>
            
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'all' ? '' : category)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  (category === 'all' && !selectedCategory) || selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No products found</h2>
            <p className="text-gray-500">Try adjusting your filters or search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;