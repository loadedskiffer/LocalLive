import React, { useState } from 'react';
import './styles.css';

const EventForm = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [artist, setArtist] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({
      eventName,
      date,
      time,
      artist,
      description,
    });
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
