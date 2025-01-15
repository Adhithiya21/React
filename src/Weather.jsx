import axios from "axios";
import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeatherData = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`
      );
      setWeather(response.data);
      setError(""); // Clear previous errors
    } catch (err) {
      setError("Could not fetch weather data. Please check the city name.");
      setWeather(null); // Clear previous weather data
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Weather App</h1>
        <div className="mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <button
          onClick={fetchWeatherData}
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-slate-500"
        >
          Get Weather
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {weather && (
          <div className="mt-6">
            <h3 className="text-lg font-bold text-black">Weather Details:</h3>
            <p>
              <strong>City:</strong> {weather.name}
            </p>
            <p>
              <strong>Temperature:</strong> {weather.main.temp}°F
            </p>
            <p>
              <strong>Condition:</strong> {weather.weather[0].description}
            </p>
            <p>
              <strong>Humidity:</strong> {weather.main.humidity}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
