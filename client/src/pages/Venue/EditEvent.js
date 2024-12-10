import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditEvent = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    name: '',
    artist: '',
    date: '',
    time: '',
    needsTickets: false,
    venue: '',
    pending: false,
    jointEvent: false,
  });

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const { data } = await axios.get(`/api/venue/events/${eventId}`);
        setEventData(data.event);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/venue/events/${eventId}`, eventData);
      if (response.data.success) {
        navigate('/venue/home');  // Redirect to home or event listing after successful update
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div>
      <h2>Edit Event</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            value={eventData.name}
            onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="artist">
          <Form.Label>Artist</Form.Label>
          <Form.Control
            type="text"
            value={eventData.artist}
            onChange={(e) => setEventData({ ...eventData, artist: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={eventData.date}
            onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            value={eventData.time}
            onChange={(e) => setEventData({ ...eventData, time: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="needsTickets">
          <Form.Check
            type="checkbox"
            label="Requires Tickets"
            checked={eventData.needsTickets}
            onChange={(e) => setEventData({ ...eventData, needsTickets: e.target.checked })}
          />
        </Form.Group>

        <Form.Group controlId="venue">
          <Form.Label>Venue</Form.Label>
          <Form.Control
            type="text"
            value={eventData.venue}
            onChange={(e) => setEventData({ ...eventData, venue: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="pending">
          <Form.Check
            type="checkbox"
            label="Pending"
            checked={eventData.pending}
            onChange={(e) => setEventData({ ...eventData, pending: e.target.checked })}
          />
        </Form.Group>

        <Form.Group controlId="jointEvent">
          <Form.Check
            type="checkbox"
            label="Joint Event"
            checked={eventData.jointEvent}
            onChange={(e) => setEventData({ ...eventData, jointEvent: e.target.checked })}
          />
        </Form.Group>

        <Button type="submit">Save Changes</Button>
      </Form>
    </div>
  );
};

export default EditEvent;
