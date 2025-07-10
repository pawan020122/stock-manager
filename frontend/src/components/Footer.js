import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">📦 Stocks Manager</h2>
          <p className="text-sm">
            Powerful and intuitive inventory management system to track and manage your stock levels, products, and alerts.
          </p>
        </div>

        {/* Column 2 - Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/stocks" className="hover:text-blue-400 transition">View Stocks</Link></li>
            <li><Link to="/add" className="hover:text-blue-400 transition">Add Stock</Link></li>
            <li><Link to="/login" className="hover:text-blue-400 transition">Login</Link></li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@stocksmanager.com</li>
            <li>Phone: +91-9876543210</li>
            <li>Address: New Delhi, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Stocks Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
