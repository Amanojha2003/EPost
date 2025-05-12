import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { CartItem as CartItemType, useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleDecreaseQuantity = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-800">
          <h3>{item.name}</h3>
          <p className="ml-4">₹{(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          {item.type === 'product' ? 'Product' : 'Service'}
        </p>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecreaseQuantity}
              className="rounded-full h-6 w-6 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
            >
              <Minus className="h-3 w-3" />
            </button>

            <span className="text-gray-600 w-6 text-center">{item.quantity}</span>

            <button
              onClick={handleIncreaseQuantity}
              className="rounded-full h-6 w-6 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          <button
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 transition-colors text-sm font-medium flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;