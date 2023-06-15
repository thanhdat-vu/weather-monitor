'use client';
import { useEffect, useState } from 'react'
import { db } from '../services/firebase';
import { ref, onValue } from "firebase/database";

export default function Home() {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    humidity: 0,
  });

  useEffect(() => {
    onValue(ref(db, "/"), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setWeatherData(data);
    });
  }, []);

  return (
    <div>
      <h1>Weather Monitor</h1>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Humidity: {weatherData.humidity}%</p>
    </div>
  )
}
