import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const SearchPage = () => {
  const [searchType, setSearchType] = useState('artist'); // or 'venue'
  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedItemInfo, setSelectedItemInfo] = useState(null);

  // Fetch options based on searchType
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/${searchType}/all`);
        if (response.status === 200) {
          setSelectedItemInfo(response.data);
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
    const response = await axios.get(`http://localhost:5000/${searchType}/search/${selectedOption}`);
    if (response.status === 200) {
      setSelectedItemInfo(response.data); // Update the selected item info state
      setEvents(response.data.events || []); // Assuming events are part of the retrieved data
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
      <div className="search-result">
        <h3>Events for {selectedOption}</h3>
        {/* Display selected artist or venue information */}
        {selectedItemInfo && (
          <div className="selected-item-info">
            <h3>{searchType === 'artist' ? 'Artist' : 'Venue'} Information</h3>
            <p>Name: {selectedItemInfo.venue_name || selectedItemInfo.artist_name}</p>
            {/* Display other relevant information for artists or venues */}
            {/* For example, for artists: */}
            {searchType === 'artist' && (
              <>
                <p>Email: {selectedItemInfo.email}</p>
                {/* Display additional artist information */}
              </>
            )}
            {/* For venues: */}
            {searchType === 'venue' && (
              <>
                <p>Website: {selectedItemInfo.venue_website}</p>
                {/* Display additional venue information */}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
