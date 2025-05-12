import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import { productsData } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = productsData.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-28 pb-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/products"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  // Find related products in the same category
  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        type: 'product',
      });
    }
  };

  const handleBuyNow = () => {
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

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="p-6 flex items-center justify-center bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-[400px] object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="p-6 md:p-8">
              <div className="mb-2">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>

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
                <span className="text-sm text-gray-500 ml-2">4.0 (24 reviews)</span>
              </div>

              <div className="text-2xl font-bold text-blue-800 mb-4">₹{product.price.toFixed(2)}</div>

              <div className="mb-6">
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Product Actions */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <span className="mr-4">Quantity:</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-8 w-8 rounded-l-md bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="h-8 w-16 border-y border-gray-300 text-center"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-8 w-8 rounded-r-md bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Wishlist and Share */}
              <div className="flex items-center text-gray-500 space-x-4">
                <button className="flex items-center hover:text-red-500 transition-colors">
                  <Heart className="h-5 w-5 mr-1" />
                  <span>Wishlist</span>
                </button>
                <button className="flex items-center hover:text-blue-500 transition-colors">
                  <Share2 className="h-5 w-5 mr-1" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  price={relatedProduct.price}
                  image={relatedProduct.image}
                  description={relatedProduct.description}
                  category={relatedProduct.category}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;