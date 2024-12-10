import { LinkContainer } from 'react-router-bootstrap';
import { Button, Spinner } from 'react-bootstrap';
import EventContainer from "../../components/EventContainer";
import '../../css/VenueHome.css';
import { useGetEventsMutation } from '../../slices/usersApiSlice';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import bannerImage from '../../Pictures/concert1.jpg';

const VenueHome = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [getEvents] = useGetEventsMutation();
    
    const { userInfo } = useSelector((state) => state.auth); // Access user info from Redux
    const venueId = userInfo._id; 

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
                    <div className="header-container">
                        <h2>Your Events</h2>
                    </div>
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
                        <div>
                            {yourEvents.map(event => (
                                <div key={event._id} className="event-item">
                                    {/* Event details here */}
                                    <h3>{event.name}</h3>
                                    {/* Edit Event Button */}
                                    <LinkContainer to={`/edit-event`}>
                                        <Button className="edit-event-btn">
                                            Edit Event
                                        </Button>
                                    </LinkContainer>
                                </div>
                            ))}
                        </div>
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
