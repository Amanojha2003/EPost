import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage: React.FC = () => {
  const { cart, getTotalItems, getTotalPrice, clearCart } = useCart();

  const isEmpty = cart.length === 0;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center mb-8">
          <ShoppingCart className="h-6 w-6 text-blue-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
        </div>

        {isEmpty ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-16 w-16 text-gray-300" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <div className="flex justify-center gap-4">
              <Link
                to="/products"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Browse Products
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Cart Items ({getTotalItems()})
                    </h2>
                    <button
                      onClick={clearCart}
                      className="text-red-500 hover:text-red-700 transition-colors text-sm"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-gray-200 p-6">
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>₹0.00</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>₹{(getTotalPrice() * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-semibold text-gray-800">
                    <span>Total</span>
                    <span>₹{(getTotalPrice() + getTotalPrice() * 0.18).toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Proceed to Checkout
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;