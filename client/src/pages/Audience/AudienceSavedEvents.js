import { useState, useEffect } from 'react';
import '../../css/SavedEvents.css'; // Create a CSS file for this component if needed
import EventContainer from "../../components/EventContainer"; // Assuming EventContainer can display a list of events

const SavedEvents = () => {
    const [savedEvents, setSavedEvents] = useState([]);

    useEffect(() => {
        // Mock fetch of saved events, or load from local storage/Redux store
        const fetchSavedEvents = async () => {
            try {
                // Here, replace with the actual fetch method, e.g., from Redux or an API
                const savedEventsData = JSON.parse(localStorage.getItem("savedEvents")) || [];
                setSavedEvents(savedEventsData);
            } catch (error) {
                console.error("Failed to load saved events:", error);
            }
        };
        fetchSavedEvents();
    }, []);

    return (
        <div className="saved-events-page">
            <h1>Saved Events</h1>
            {savedEvents.length > 0 ? (
                <EventContainer events={savedEvents} />
            ) : (
                <p>No saved events available.</p>
            )}
        </div>
    );
};

export default SavedEvents;
