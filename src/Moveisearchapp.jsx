import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineImageNotSupported } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Fetchdata = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const fetchdata = async () => {
    if (!search.trim()) return; // Prevent empty search
    setLoading(true); // Set loading to true
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`
      );
      if (response.data.Response === 'True') {
        setData(response.data.Search);
        setError('');
      } else {
        setData([]);
        setError('No results found');
      }
    } catch (err) {
      console.error('Error fetching data:', err.message);
      setError('Error fetching data');
      setData([]);
    } finally {
      setLoading(false); // Turn off loading
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (error) setError(''); // Clear error on input change
  };

  return (
    <div className="text-white flex flex-col gap-4 w-full h-screen items-center justify-center relative bg-black overflow-hidden">
      {/* Background Lighting Effect */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-green-500 via-transparent to-green-500 z-0 blur-3xl animate-pulse" />

      {/* Input and Button */}
      <div className="flex items-center gap-2 z-10 mt-10">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search for movies..."
          className="border rounded p-2 flex-1 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-700 text-white shadow-lg transition-all"
        />
        <button
          onClick={fetchdata}
          disabled={!search.trim() || loading}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 disabled:bg-gray-500 transition-all transform hover:scale-105"
        >
          <FaSearch />
          Search
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && <div className="text-blue-500">Loading...</div>}

      {/* Error Message */}
      {error && <div className="text-red-500 text-center">{error}</div>}

      {/* Movie Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {data.length > 0 &&
          data.map((item) => (
            <motion.div
              key={item.imdbID}
              className="text-center bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform transform hover:shadow-xl hover:bg-gray-700"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item.Poster !== 'N/A' ? (
                <Link to={`/wee/${item.imdbID}`}>
                  <img
                    src={item.Poster}
                    alt={item.Title}
                    className="max-w-full h-auto rounded-lg"
                  />
                </Link>
              ) : (
                <div className="flex items-center justify-center h-48 bg-gray-700 rounded">
                  <MdOutlineImageNotSupported size={48} />
                </div>
              )}
              <p className="mt-2 text-lg font-semibold">{item.Title}</p>
            </motion.div>
          ))}
      </motion.div>

      {/* No Data Message */}
      {!error && data.length === 0 && !loading && (
        <motion.div
          className="text-center text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          No data to display
        </motion.div>
      )}
    </div>
  );
};