// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Stocks() {
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

// export default Stocks;




import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Stocks() {
  const [stocks, setStocks] = useState([]);
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    price: '',
    category: ''
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = () => {
    axios.get('http://localhost:5000/api/stocks')
      .then((res) => setStocks(res.data))
      .catch((err) => console.error("Fetch error:", err));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/stocks/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post('http://localhost:5000/api/stocks', form);
      }
      toast.success("Stock added successfully!");
      setForm({ name: '', quantity: '', price: '', category: '' });
      fetchStocks();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/stocks/${id}`);
      toast.success("Stock deleted successfully!");
      fetchStocks();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleEdit = (stock) => {
    setForm({
      name: stock.name,
      quantity: stock.quantity,
      price: stock.price,
      category: stock.category
    });
    setEditId(stock._id);
  };

  return (
    <div className="p-6 pt-24 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">📦 Stock Manager</h1>

      {/* Stock Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 grid gap-4 md:grid-cols-2 mb-10">
        <input className="border p-2 rounded" type="text" name="name" placeholder="Item Name" value={form.name} onChange={handleChange} required />
        <input className="border p-2 rounded" type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
        <input className="border p-2 rounded" type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input className="border p-2 rounded" type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
        <button type="submit" className="col-span-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200">
          {editId ? "Update Stock ✏️" : "Add Stock ➕"}
        </button>
      </form>

      {/* Stock Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-slate-800">
            {stocks.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">No stocks available.</td>
              </tr>
            ) : (
              stocks.map((stock) => (
                <tr key={stock._id} className="border-t">
                  <td className="px-4 py-3">{stock.name}</td>
                  <td className="px-4 py-3">{stock.quantity}</td>
                  <td className="px-4 py-3">₹{stock.price}</td>
                  <td className="px-4 py-3">{stock.category}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                      onClick={() => handleEdit(stock)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(stock._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stocks;
