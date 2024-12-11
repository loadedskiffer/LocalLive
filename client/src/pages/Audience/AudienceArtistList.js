import React, { useEffect, useState } from 'react';
import ArtistContainer from '../../components/ArtistContainer';
import { Spinner, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const AudienceArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch artists from the API
  const fetchArtists = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/artists');  // Update to the actual API endpoint
      setArtists(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching artists:', err);
      setError('Failed to load artists. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <div>
      <h1>Artist List</h1>
      
      {loading ? (
        <div className="spinner-container">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <div>
          <p>{error}</p>
          <Button onClick={fetchArtists} variant="danger">Retry</Button>
        </div>
      ) : (
        <ArtistContainer artists={artists} />
      )}
    </div>
  );
};

export default AudienceArtistList;
