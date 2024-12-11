import React, { useEffect, useState } from 'react';
import VenueContainer from '../../components/VenueContainer'; // Make sure this is the VenueContainer component
import { Spinner, Button } from 'react-bootstrap';
import axios from 'axios';

const AudienceVenueList = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch venues from the API
  const fetchVenues = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/venues');  // Update to the actual API endpoint for venues
      setVenues(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching venues:', err);
      setError('Failed to load venues. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  return (
    <div>
      <h1>Venue List</h1>
      
      {loading ? (
        <div className="spinner-container">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <div>
          <p>{error}</p>
          <Button onClick={fetchVenues} variant="danger">Retry</Button>
        </div>
      ) : (
        <VenueContainer venues={venues} />
      )}
    </div>
  );
};

export default AudienceVenueList;
