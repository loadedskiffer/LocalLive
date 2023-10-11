import React from 'react';

const Event = ({ eventDetails }) => {
    return (
        <div>
            {/* Display Event Details */}
            <h3>{eventDetails.name}</h3>
            <p>{eventDetails.date}</p>
            <p>{eventDetails.venue}</p>
        </div>
    );
}

export default Event;
