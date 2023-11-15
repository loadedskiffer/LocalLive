import React, { useState } from "react";
import { Platform, StyleSheet, Text, View, Button, SectionList, Alert } from "react-native";
import Event from '../Event/index.js';
import Profile from "../Profile/index.js";

//const data_Custom = require('./data.json');
/*
EventList: Show event list
 */
const EventList = ({ sections, onTitleClick, onEventClick }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
    /*
    constructor() {
        super();
        this.notesdata = Object.keys(data).map((key) => {
          return { data: data[key].artist, version: data[key].date }
        });
      }*/
    
      
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
                  <div key={event.id} onClick={() => handleEventClick(event)}>
                    {event.artist} 
                  </div>
                ))}
                {selectedVenue && (
                  <Profile venueData={selectedVenue} closeModal={() => setSelectedVenue(null)} />
                )}
            </div>
          ))}

          {showModal && <Event event={selectedEvent} closeModal={() => setShowModal(false)} onVenueClick={handleVenueClick} />}
          {/** 
            <SectionList
                sections={[
                    { title: 'Slidin Dirty', data: [{artist:'E Block', date:'Oct 16', time:'8:00pm'}] },
                    { title: 'Dinosaur BBQ', data: [{artist:'The Refridgerators', date:'Oct 16', time:'7:00pm' }]},
                    { title: 'Bootleggers', data: [{artist:'Skip & The Gang', date:'Oct 16', time:'8:00pm'}] },
                    { title: 'Ryan\'s Wake', data: [{artist:'Maggie\'s Clan', date:'Oct 16', time:'10:00pm'}] },
                ]}
                renderSectionHeader={ ({section}) => <Text style={styles.SectionHeader}> { section.title } </Text> }
                renderItem={ ({item}) => 
                    <View>
                        <Text style={styles.SectionListItemTitle}> { item.artist } </Text> 
                        <div>
                            <Text style={styles.SectionListItemDate}> { item.date } </Text> 
                            <Text style={styles.SectionListItemTime}> { item.time } </Text> 
                        </div>
                    </View>
                }
                keyExtractor={ (item, index) => index }
            />
          */}
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