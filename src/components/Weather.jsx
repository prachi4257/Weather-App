import React, { useState } from "react";
import axios from "axios";
export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = "0140a21ea90089a359a4cca7d18fb46e";

  const getWeather = async () => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(res.data);
    } catch (error) {
      alert("City not Found");
    }
  };
  return (
    <div className="container">
      <div className="card">
        <h2>Weather App</h2>
        <input
          type="text"
          value={city}
          placeholder="Enter City Name"
          onChange={(e) => setCity(e.target.value)}
          
        />
        <button onClick={getWeather}>Get Weather</button>
        {weather && (
          <div className="weather-info">
            <h3>{weather.name}</h3>
            <p>Temperature : {weather.main.temp} degree C</p>
            <p>Condition : {weather.weather[0].description}</p>
            <p>Humidity : {weather.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
