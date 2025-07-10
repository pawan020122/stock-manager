import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path
      ? 'text-blue-500 font-semibold'
      : 'text-gray-700 hover:text-blue-500';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-slate-800">📦 Stocks Manager</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-base">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/add" className={isActive('/stocks')}>View Stocks</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 text-base px-2">
          <Link to="/" onClick={() => setMenuOpen(false)} className={isActive('/')}>Home</Link>
          <Link to="/add" onClick={() => setMenuOpen(false)} className={isActive('/add')}>Add Stock</Link>
        </div>
      )}
    </nav>
  );
}
