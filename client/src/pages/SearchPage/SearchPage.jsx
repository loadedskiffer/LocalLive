import React, { useState, useEffect } from 'react';
import './SearchPage.css'; //
const SearchPage = () => {
  const [searchType, setSearchType] = useState('artist'); // or 'venue'
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const url = searchType === 'artist' ? '/api/artist/all' : '/api/venue/all';
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          setOptions(data);
          console.log(data); // Debugging
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchOptions();
  }, [searchType]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const url = searchType === 'artist' ? `/api/events/artist/${selectedOption}` : `/api/events/venue/${selectedOption}`;
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setEvents(data);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <select onChange={(e) => setSearchType(e.target.value)} value={searchType} className="search-dropdown">
          <option value="artist">Artist</option>
          <option value="venue">Venue</option>
        </select>

        <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption} className="search-dropdown">
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <button type="submit" className="search-button">Search</button>
      </form>

      {/* ... existing code ... */}
    </div>
  );
};

export default SearchPage;