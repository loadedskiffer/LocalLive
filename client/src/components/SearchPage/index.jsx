import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const SearchPage = () => {
  const [searchType, setSearchType] = useState('artist'); // or 'venue'
  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([]);
  const [events, setEvents] = useState([]);

  // Fetch options based on searchType
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/${searchType}/all`);
        if (response.status === 200) {
          setOptions(response.data);
        } else {
          console.error('Failed to fetch options');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchOptions();
  }, [searchType]);

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/events/${searchType}/${selectedOption}`);
      if (response.status === 200) {
        setEvents(response.data);
      } else {
        console.error('Failed to fetch events');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        {/* Select Search Type */}
        <div>
          <label>Select Search Type:</label>
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="search-dropdown"
          >
            <option value="artist">Artist</option>
            <option value="venue">Venue</option>
          </select>
        </div>

        {/* Select Artist or Venue */}
        <div>
          <label>Select {searchType === 'artist' ? 'Artist' : 'Venue'}:</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="search-dropdown"
            required
          >
            <option value="">Select {searchType === 'artist' ? 'Artist' : 'Venue'}</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="searchButton">
          <button type="submit" className="search-button">Search</button>
        </div>
      </form>

      {/* Display Events */}
      <div>
        <h3>Events for {selectedOption}</h3>
        <ul>
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
