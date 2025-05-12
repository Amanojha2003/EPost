import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetail from './pages/ProductDetail';
import ServiceDetail from './pages/ServiceDetail';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;