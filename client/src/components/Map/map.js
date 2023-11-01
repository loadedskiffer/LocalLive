import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 42.728104, lng: -73.687576
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyARAHqEEzXr1c9RgEJf-DijVG99lPN47DA'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;