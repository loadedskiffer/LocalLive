import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, SectionList, Alert } from "react-native";

//const data_Custom = require('./data.json');
/*
EventList: Show event list
 */
export default class EventList extends Component {
    /*
    constructor() {
        super();
        this.notesdata = Object.keys(data).map((key) => {
          return { data: data[key].artist, version: data[key].date }
        });
      }*/
    render() {
      return (    
        <View style={styles.container}>
            
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
        </View>
        
    )}
};

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