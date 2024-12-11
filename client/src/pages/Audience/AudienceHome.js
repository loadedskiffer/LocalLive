import EventContainer from "../../components/EventContainer";
import '../../css/AudienceHome.css';
import { useGetEventsMutation, useSaveEventMutation } from '../../slices/usersApiSlice';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bannerImage from '../../Pictures/concert1.jpg';

const AudienceHome = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [getEvents] = useGetEventsMutation();
    const navigate = useNavigate();
    const [saveEvent] = useSaveEventMutation();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await getEvents().unwrap();
                setAllEvents(res);
            } catch (err) {
                console.error('Failed to fetch events:', err);
                setError('Failed to load events');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [getEvents]);

    const handleSavedEventsClick = () => {
        navigate('/saved-events');
    };

    const handleSaveEvent = async (eventId) => {
        try {
            await saveEvent(eventId).unwrap();
            alert('Event saved successfully!');
        } catch (err) {
            console.error('Failed to save event:', err);
            alert('Failed to save event. Please try again.');
        }
    };
    
    return (
        <div className="container">
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h1 className="banner-text">Welcome to Audience Home</h1>
            </div>
    
             {/* Navigation Buttons */}
             <div className="navigation-buttons">
                <Link to="/venue-list">
                    <button>Venue List</button>
                </Link>
                <Link to="/artist-list">
                    <button>Artist List</button>
                </Link>
                <Link to="/saved-events">
                    <button>Saved Events</button>
                </Link>
            </div>
    
            {/* Events Section */}
            <div className="eventWrapper">
                <div className="left-container">
                    <h2>Your Events</h2>
                    {loading ? (
                        <p>Loading events...</p>
                    ) : error ? (
                        <p className="error-message">{error}</p>
                    ) : (
                        <div className="events-list">
                            {allEvents.map((event) => (
                                <div key={event.id} className="event-card">
                                    <h3 className="event-title">{event.name}</h3>
                                    <p className="event-description">{event.description}</p>
                                    <button
                                        onClick={() => handleSaveEvent(event.id)}
                                        className="save-event-button"
                                    >
                                        Save Event
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
    
};

export default AudienceHome;
