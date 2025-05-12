import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to us through any of the following channels or fill out the contact form below.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Our Location</h3>
            <p className="text-gray-600">
              123 Postal Avenue, Delhi, India 110001
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Phone Number</h3>
            <p className="text-gray-600">
              +91 98765 43210<br />
              +91 98765 43211
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Email Address</h3>
            <p className="text-gray-600">
              info@amanspostoffice.com<br />
              support@amanspostoffice.com
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Working Hours</h3>
            <p className="text-gray-600">
              Monday - Saturday<br />
              9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Service Inquiry">Service Inquiry</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-[400px] bg-gray-200 p-4 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Map view would be displayed here.<br />
                  Aman's e-Post Office<br />
                  123 Postal Avenue, Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600 mb-4">
                  We accept various payment methods including credit/debit cards, UPI, and cash on delivery for eligible products.
                </p>

                <h3 className="font-semibold text-gray-800 mb-2">How long does shipping take?</h3>
                <p className="text-gray-600 mb-4">
                  Standard shipping typically takes 3-5 business days within India. Express shipping options are also available.
                </p>

                <h3 className="font-semibold text-gray-800 mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Yes, we offer international shipping to select countries. Shipping times and costs vary based on destination.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What is your return policy?</h3>
                <p className="text-gray-600 mb-4">
                  We offer a 7-day return policy for most products. Items must be in their original condition with packaging.
                </p>

                <h3 className="font-semibold text-gray-800 mb-2">How can I track my order?</h3>
                <p className="text-gray-600 mb-4">
                  Once your order is shipped, you'll receive a tracking number via email to monitor your package's progress.
                </p>

                <h3 className="font-semibold text-gray-800 mb-2">Do you offer discounts for bulk orders?</h3>
                <p className="text-gray-600">
                  Yes, we offer special pricing for bulk orders. Please contact our customer service team for more information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-lg shadow-sm p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our customer support team is available to assist you with any questions or concerns you may have.
          </p>
          <div className="inline-flex items-center justify-center">
            <Phone className="h-5 w-5 mr-2" />
            <span className="font-semibold">Call us at +91 98765 43210</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;