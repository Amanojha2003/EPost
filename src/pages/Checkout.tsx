import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, Check, User, MapPin, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  });

  if (cart.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-3">
              <Check className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We've sent a confirmation email with all the details.
          </p>
          <p className="text-gray-800 font-medium mb-8">
            Your order number: #ORD-{Math.floor(100000 + Math.random() * 900000)}
          </p>
          <button
            onClick={() => navigate('/')}
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Shipping Address
                </h2>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select State</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{6}"
                    maxLength={6}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                  Payment Method
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="credit-card"
                      name="paymentMethod"
                      type="radio"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
                      Credit / Debit Card
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="cod"
                      name="paymentMethod"
                      type="radio"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="cod" className="ml-3 block text-sm font-medium text-gray-700">
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                {formData.paymentMethod === 'credit-card' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          id="cardExpiry"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          required
                          placeholder="MM/YY"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV *
                        </label>
                        <input
                          type="text"
                          id="cardCvv"
                          name="cardCvv"
                          value={formData.cardCvv}
                          onChange={handleChange}
                          required
                          maxLength={3}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:hidden">
                <OrderSummary />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="hidden lg:block">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderSummary: React.FC = () => {
  const { cart, getTotalPrice } = useCart();
  const shippingCost = 0;
  const taxRate = 0.18;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>

      <div className="max-h-96 overflow-y-auto mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center py-3 border-b border-gray-200 last:border-0">
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">
                Qty: {item.quantity} x ₹{item.price.toFixed(2)}
              </p>
            </div>
            <p className="text-sm font-medium text-gray-800">
              ₹{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>₹{getTotalPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>₹{shippingCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax (18%)</span>
          <span>₹{(getTotalPrice() * taxRate).toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 flex justify-between font-semibold text-gray-800">
          <span>Total</span>
          <span>₹{(getTotalPrice() + getTotalPrice() * taxRate + shippingCost).toFixed(2)}</span>
        </div>
      </div>

      <div className="rounded-md bg-gray-50 p-4">
        <div className="flex items-center text-gray-600 mb-2">
          <Truck className="h-5 w-5 mr-2 text-blue-600" />
          <span className="text-sm font-medium">Delivery Information</span>
        </div>
        <p className="text-sm text-gray-500">
          Standard Delivery: 3-5 business days
        </p>
      </div>
    </div>
  );
};

export default Checkout;