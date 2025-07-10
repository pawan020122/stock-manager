import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
        📦 Stocks Manager
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-xl">
        Manage your inventory efficiently with real-time stock updates, low-stock alerts, and an easy-to-use dashboard.
      </p>
      <button
        onClick={() => navigate('/add')}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white text-lg transition-all duration-300 shadow-lg"
      >
        View Stocks
      </button>
    </div>
  );
};

export default HomePage;
