import React, { useState } from 'react';
import Head from 'next/head';
import BgApp from '../components/bg-app';
import SearchBar from '../components/SearchBar';

interface WeatherData {
  temperature: number;
  clothing: ClothingItem[];
}

interface ClothingItem {
  name: string;
  imageUrl: string;
}

const MyApp: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1ab41b83246cdd86ca53829047478d06`
      );
      const data = await response.json();
      const temperature = data.main.temp;
      const weather  = data.weather[0].main;
      const clothing = getRecommendedClothing(temperature, weather);
      setWeatherData({ temperature, clothing });
    } catch (error) {
      console.error(error);
    }
  };

  const getRecommendedClothing = (temperature: number, weather: string): ClothingItem[] => {
    if (temperature >= 25 && weather === 'Clear') {
      return [
        { name: 'T-shirt', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Shorts', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Sunglasses', imageUrl: 'https://via.placeholder.com/150x150' },
      ];
    } else if (temperature >= 25 && (weather === 'Rain' || weather === 'Clouds')) {
      return [
        { name: 'T-shirt', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Jeans', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Sneakers', imageUrl: 'https://via.placeholder.com/150x150' },
      ];
    } else if (temperature >= 18 && temperature < 25 && weather === 'Clear') {
      return [
        { name: 'T-shirt', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Jeans', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Sneakers', imageUrl: 'https://via.placeholder.com/150x150' },
      ];
    } else if (temperature >= 18 && temperature < 25 && (weather === 'Rain' || weather === 'Clouds')) {
      return [
        { name: 'Sweater', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Raincoat', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Rain boots', imageUrl: 'https://via.placeholder.com/150x150' },
      ];
    } else if (temperature >= 10 && temperature < 18 && weather === 'Clear') {
      return [
        { name: 'T-shirt', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Jeans', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Sneakers', imageUrl: 'https://via.placeholder.com/150x150' },
      ];
    } else if (temperature >= 10 && temperature < 18 && (weather === 'Rain' || weather === 'Clouds')) {
      return [
        { name: 'Gloves', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Wool socks', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Scarf', imageUrl: 'https://via.placeholder.com/150x150' },
      ];
    } else if (temperature < 10 && weather === 'Clear') { 
      return [
        { name: 'T-shirt', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Jeans', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Sneakers', imageUrl: 'https://via.placeholder.com/150x150' },
      ];
    } else if (temperature < 10 && (weather === 'Rain' || weather === 'Clouds')) {
      return [
        { name: 'Gloves', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Wool socks', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Scarf', imageUrl: 'https://via.placeholder.com/150x150' },
      ];
    } else if (temperature < 10 && weather === 'Snow') {
      return [
        { name: 'Gloves', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Wool socks', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Scarf', imageUrl: 'https://via.placeholder.com/150x150' },
      ];
    } else if (temperature < 10 && weather === 'Mist') { 
      return [
        { name: 'Gloves', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Wool socks', imageUrl: 'https://via.placeholder.com/150x150' },
        { name: 'Scarf', imageUrl: 'https://via.placeholder.com/150x150' },
      ];
    } 
    return []; // Devuelve un arreglo vacío si no se cumple ninguna de las condiciones anteriores
  };  

  return (
    <BgApp>
      <Head>
        <title>What to Wear</title>
      </Head>
      <div className="text-black bg-white bg-opacity-75 rounded-lg p-10">
        <h1 className="text-4xl font-bold mb-4 text-center">What to Wear</h1>
        <SearchBar onSearch={handleSearch} />
        {weatherData && (
          <div className="mt-6"> 
          <h2 className="text-2xl mb-4">Temperature: {weatherData.temperature}°C</h2> 
            <h2 className="text-2xl mb-4">Recommended Clothing:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {weatherData.clothing.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-24 w-24 object-cover rounded-full mb-4"
                  />
                  <p className="text-center font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </BgApp>
  );
};

export default MyApp;
