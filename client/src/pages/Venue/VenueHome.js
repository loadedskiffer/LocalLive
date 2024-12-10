import { LinkContainer } from 'react-router-bootstrap';
import { Button, Spinner } from 'react-bootstrap';
import EventContainer from "../../components/EventContainer";
import '../../css/AudienceHome.css';
import { useGetEventsMutation } from '../../slices/usersApiSlice';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import bannerImage from '../../Pictures/concert1.jpg';

const VenueHome = () => {
    const { userInfo } = useSelector((state) => state.auth); // Access user info from Redux
    const venueId = userInfo._id; // Get the logged-in user's venue ID

    const [allEvents, setAllEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]); // State for filtered events
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [getEvents] = useGetEventsMutation();

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await getEvents().unwrap();
            setAllEvents(res);
            setFilteredEvents(res.filter((event) => event.venue === venueId)); // Filter events by venueId
            setError(null); // Reset error on success
        } catch (err) {
            console.error('Failed to fetch events:', err);
            setError('Failed to load events. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [getEvents]);

    return (
        <div>
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h1 className="banner-text">Welcome to Venue Home</h1>
            </div>
            
            <div>
                <LinkContainer to="/venue/create-event">
                    <Button variant="primary" className="mb-3">
                        Create New Event
                    </Button>
                </LinkContainer>
            </div>

            {/* Events Section */}
            <div className="eventContainer">
                {loading ? (
                    <div className="spinner-container">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : error ? (
                    <div>
                        <p>{error}</p>
                        <Button onClick={fetchData} variant="danger">Retry</Button>
                    </div>
                ) : (
                    <EventContainer events={filteredEvents} /> // Pass filtered events
                )}
            </div>
        </div>
    );
};

export default VenueHome;
