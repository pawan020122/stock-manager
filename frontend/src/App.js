// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [stocks, setStocks] = useState([]);
//   const [form, setForm] = useState({
//     name: '',
//     quantity: '',
//     price: '',
//     category: ''
//   });

//   // Fetch all stocks on load
//   useEffect(() => {
//     fetchStocks();
//   }, []);

//   const fetchStocks = () => {
//     axios.get('http://localhost:5000/api/stocks')
//       .then((res) => setStocks(res.data))
//       .catch((err) => console.error("Fetch error:", err));
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     if (editId) {
//       // ✏️ Update existing stock
//       await axios.put(`http://localhost:5000/api/stocks/${editId}`, form);
//       setEditId(null); // exit edit mode
//     } else {
//       // ➕ Add new stock
//       await axios.post('http://localhost:5000/api/stocks', form);
//     }

//     setForm({ name: '', quantity: '', price: '', category: '' }); // reset form
//     fetchStocks(); // refresh list
//   } catch (err) {
//     console.error("Submit error:", err);
//   }
// };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/stocks/${id}`);
//       fetchStocks();
//     } catch (err) {
//       console.error("Error deleting stock:", err);
//     }
//   };
//   const [editId, setEditId] = useState(null);

// const handleEdit = (stock) => {
//   setForm({
//     name: stock.name,
//     quantity: stock.quantity,
//     price: stock.price,
//     category: stock.category
//   });
//   setEditId(stock._id); // save ID to know it's edit mode
// };


//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">📦 Stock Manager</h1>

//       {/* Add Stock Form */}
//       <form onSubmit={handleSubmit} className="mb-8 bg-white shadow p-4 rounded grid grid-cols-2 gap-4">
//         <input className="border p-2" type="text" name="name" placeholder="Item Name" value={form.name} onChange={handleChange} required />
//         <input className="border p-2" type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
//         <input className="border p-2" type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
//         <input className="border p-2" type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
//         <button className="col-span-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//   {editId ? "Update Stock ✏️" : "Add Stock ➕"}
// </button>
// </form>


//       {/* Stock List Table */}
//       <table className="table-auto border w-full">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Quantity</th>
//             <th className="border px-4 py-2">Price</th>
//             <th className="border px-4 py-2">Category</th>
//           </tr>
//         </thead>
//         <tbody>
//   {stocks.map((stock) => (
//     <tr key={stock._id}>
//       <td className="border px-4 py-2">{stock.name}</td>
//       <td className="border px-4 py-2">{stock.quantity}</td>
//       <td className="border px-4 py-2">₹{stock.price}</td>
//       <td className="border px-4 py-2">{stock.category}</td>
//       <td className="border px-4 py-2">

//   <button
//     className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
//     onClick={() => handleEdit(stock)}
//   >
//     Edit
//   </button>
//         <button
//           className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//           onClick={() => handleDelete(stock._id)}
//         >
//           Delete
//         </button>
//       </td>
//     </tr>
//   ))}
// </tbody>

//       </table>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Stocks from './components/Stocks'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<Stocks />} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App