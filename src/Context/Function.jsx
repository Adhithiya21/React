import React, { useState } from 'react';

export default function UserLogin() {
  const [formData, setFormData] = useState({ email: ' ', password: ' ' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-green-700 p-6 rounded-2xl shadow-lg w-96 h-96">
        <h2 className="text-2xl font-bold mb-4 text-black text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-950"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Password</label>
            <input type="password" id="password" name="password" value={formData.password}onChange={handleChange}className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-950" required/>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2  mt-3">
            Login
          </button>
          <p className="text-xs text-white mt-1">
    Password must be at least 8 characters, contain a number, and a special character.
  </p>
        </form>
      </div>
    </div>
  );
}