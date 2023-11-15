import React, { useState } from 'react';
import './styles.css';

/*
EventForm: Venues can create event post and set event name, date, time, artist, and description
 */
const EventForm = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [artist, setArtist] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend
      const response = await fetch('http://localhost:5000/event/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event_name: eventName,
          venueName: "test",
          date: date,
          duration: time, 
          artistName: artist, 
          parking_and_admission_info: description,
        }),
      });
      console.log(response)
      if (response.ok) {
        // If the response is successful, update the UI or do other tasks
        const result = await response.json();
        console.log(result);
      } else {
        // Handle error cases
        console.error('Error creating event');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setEventName('');
    setDate('');
    setTime('');
    setArtist('');
    setDescription('');
  };
  return (
    <div className='PageContainer'>
        <form onSubmit={handleSubmit}>
        <h2>Create Event</h2>
        <div>
            <label>Event Name </label>
            <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Date </label>
            <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Time </label>
            <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Artist </label>
            <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Description </label>
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            required
            />
        </div>
        <button type="submit">Create Event</button>
        </form>
    </div>
  );
};

export default EventForm;
