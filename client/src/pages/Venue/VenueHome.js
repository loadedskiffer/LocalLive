import { LinkContainer } from 'react-router-bootstrap';
import { Container, Card, Button } from 'react-bootstrap';
import EventContainer from "../../components/EventContainer";
import '../../css/AudienceHome.css';
import { useGetEventsMutation } from '../../slices/usersApiSlice';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bannerImage from '../../Pictures/concert1.jpg';

const VenueHome = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [getEvents] = useGetEventsMutation();
    const navigate = useNavigate();

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

    // Handle saved events button click
    const handleSavedEventsClick = () => {
        navigate('/venue/saved-events'); // Navigate to the Saved Events page
    };

    return (
        <div>
            <div>
                <h1>Venue Home</h1>
                <LinkContainer to="/venue/create-event">
                    <Button variant="primary" className="mb-3">
                        Create New Event
                    </Button>
                </LinkContainer>
            </div>

            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h1 className="banner-text">Welcome to Venue Home</h1>
            </div>

            {/* Button for Saved Events */}
            <div className="button-container">
                <button className="saved-events-button" onClick={handleSavedEventsClick}>
                    Saved Events
                </button>
            </div>

            {/* Events Section */}
            <div className="eventContainer">
                {loading ? (
                    <p>Loading events...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <EventContainer events={allEvents} />
                )}
            </div>
        </div>
    );
};

export default VenueHome;
