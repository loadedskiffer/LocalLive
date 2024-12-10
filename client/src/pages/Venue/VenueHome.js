import { LinkContainer } from 'react-router-bootstrap';
import { Button, Spinner } from 'react-bootstrap';
import EventContainer from "../../components/EventContainer";
import '../../css/VenueHome.css';
import { useGetEventsMutation } from '../../slices/usersApiSlice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bannerImage from '../../Pictures/concert1.jpg';

const VenueHome = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [getEvents] = useGetEventsMutation();
    const navigate = useNavigate();

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await getEvents().unwrap();
            setAllEvents(res);
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

    // Assuming userInfo._id is the venue's ID, which is passed as a prop or accessed from state
    const { userInfo } = useSelector((state) => state.auth); // Access user info from Redux
    const venueId = userInfo._id; // Replace this with the actual venue ID logic

    // Filter events based on venueId
    const yourEvents = allEvents.filter(event => event.venue === venueId);
    const otherEvents = allEvents.filter(event => event.venue !== venueId);

    return (
        <div>
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h1 className="banner-text">Welcome to Venue Home</h1>
            </div>

            <div>
                <LinkContainer to="/venue/create-event">
                    <Button className="create-event-btn">
                        Create New Event
                    </Button>
                </LinkContainer>
            </div>

            {/* Event Wrapper for Left and Right Side Containers */}
            <div className="eventWrapper">
                {/* Your Events */}
                <div className="left-container">
                    <h2>Your Events</h2>
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
                        <EventContainer events={yourEvents} />
                    )}
                </div>

                {/* Other Events */}
                <div className="right-container">
                    <h2>Other Events</h2>
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
                        <EventContainer events={otherEvents} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default VenueHome;
