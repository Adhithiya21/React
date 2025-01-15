import React, { useState } from 'react';
import axios from 'axios';

const Fetch = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setData(response.data);
    };

    console.log(data);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <button
                onClick={fetchData}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
                Fetch Data
            </button>
            <div className="mt-6 w-full max-w-md">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 mb-4 bg-white rounded-lg shadow hover:shadow-lg"
                    >
                        <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fetch;
