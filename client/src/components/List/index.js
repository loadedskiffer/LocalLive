import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View, Button, SectionList, Alert } from "react-native";
import Event from '../Event/index.js';
import Profile from "../Profile/index.js";
import axios from 'axios';

//const data_Custom = require('./data.json');
/*
EventList: Show event list
 */
const EventList = ({ onTitleClick, onEventClick }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sections, setSections] = useState([]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };
  const handleTitleClick = (section) => {
    console.log(`Title clicked: ${section.title}`);
    
  };
  const handleVenueClick = (venue) => {
    console.log(`Venue clicked: ${venue}`);

  };
  const closeModal = () => {
    setSelectedEvent(null);
    setSelectedVenue(null);
    setShowModal(false);
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/event/all');
        if (response.status === 200) {
          const eventsData = response.data.map((event) => ({
            title: event.venueName,
            data: [event],
          }));
          setSections(eventsData);
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (    
    <View style={styles.container}>
        {showModal && selectedEvent && (
          <div>
            <Event event={selectedEvent} closeModal={closeModal} />
            {selectedVenue && <Profile venueData={selectedVenue} />}
          </div>
        )}
        
        {sections.map((section) => (
        <div key={section.title}>
          <h3
            style={clickableStyle} // Apply the clickable style here
            onClick={() => {
              handleTitleClick(section);
              onTitleClick && onTitleClick(section); // Call the provided callback if available
            }}
          >
            {section.title}
          </h3>
            {section.data.map((event) => (
              <View key={event.id}>
                <Text onPress={() => onEventClick(event)}>{event.artist}</Text>
              </View>
            ))}
            {selectedVenue && (
              <Profile venueData={selectedVenue} closeModal={() => setSelectedVenue(null)} />
            )}
        </div>
      ))}

      {showModal && <Event event={selectedEvent} closeModal={() => setShowModal(false)} onVenueClick={handleVenueClick} />}
    </View>
        
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#e5e5e5"
    },
    div:{
        backgroundColor: "#e5e5e5"
    },
    SectionHeader:{
      backgroundColor : '#64B5F6',
      fontSize : 20,
      padding: 5,
      color: '#fff',
      fontWeight: 'bold'
   },
   SectionListItemTitle:{
    fontSize : 16,
    padding: 6,
    color: '#000',
    },
    SectionListItemDate:{
      fontSize : 14,
      padding: 6,
      color: '#000',
  },
  SectionListItemTime:{
    fontSize : 14,
    padding: 6,
    color: '#000',
}
});
const clickableStyle = {
  cursor: 'pointer',
  //backgroundColor: '#e0e0e0', // Change this color to the desired hover color
};

export default EventList;