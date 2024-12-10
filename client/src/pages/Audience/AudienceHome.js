import EventContainer from "../../components/EventContainer";
import '../../css/AudienceHome.css';
import { useGetEventsMutation } from '../../slices/usersApiSlice';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bannerImage from '../../Pictures/concert1.jpg';

const AudienceHome = () => {
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

    const handleSavedEventsClick = () => {
        navigate('/saved-events');
    };

    return (
        <div className="container">
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h1 className="banner-text">Welcome to Audience Home</h1>
            </div>

            {/* Button for Saved Events */}
            <div className="button-container">
                <button className="saved-events-button" onClick={handleSavedEventsClick}>
                    Saved Events
                </button>
            </div>

            {/* Events Section */}
            <div className="eventWrapper">
                <div className="left-container">
                    <h2>Your Events</h2>
                    {loading ? (
                        <p>Loading events...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <EventContainer events={allEvents} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AudienceHome;
