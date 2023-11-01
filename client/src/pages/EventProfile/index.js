import React from 'react';
import Event from '../../components/Event/index.js';
import Profile from '../../components/Profile/index.js';

const EventProfile = () => {
    // Sample Data, this would ideally come from an API

    return (
        <div>
            <Event
                data={{
                name: "Slidin Dirty",
                artist:"Mile's Band",
                address: "2341 River Street, Troy NY, 12180",
                date:"Nov 12,2023",
                time:"20:30",
                
                }}
            />
            {/* More content like upcoming events can be added here */}
        </div>
    );
}

export default EventProfile;
