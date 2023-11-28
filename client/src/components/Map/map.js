import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/venue/all/locations'); // Adjust the endpoint as needed
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const mapStyles = {        
    height: "100vh",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: 42.728104, lng: -73.687576
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyARAHqEEzXr1c9RgEJf-DijVG99lPN47DA'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      >
        {events.map(event => (
          <Marker 
            key={event[0]} // Assuming each event has a unique _id
            position={{ lat: event[0], lng: event[1] }} // Adjust according to your event data structure
            label={"LL"}
          />
        ))}
       
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
