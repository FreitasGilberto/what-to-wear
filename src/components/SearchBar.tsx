import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <div className="flex items-center justify-center h-20">
      <input
        className="p-2 rounded-l-lg w-60"
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="p-2 bg-blue-500 text-white rounded-r-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;