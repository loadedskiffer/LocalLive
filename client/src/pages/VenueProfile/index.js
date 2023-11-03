import React from 'react';
import Profile from '../../components/Profile/index.js';

/* 
EventProfile: Show venue information*/
const VenueProfile = () => {
    return (
        <div>
            <Profile
                data={{// Sample Data, this would ideally come from an API
                name: "Slidin Dirty",
                bio:
                    "A captivating urban oasis, nestled in the heart of the city. This venue offers a magical experience for all types of events. As you enter, a world of natural wonder unfolds before you. Lush greenery and vibrant blooms adorn every corner, complemented by the gentle twinkle of fairy lights overhead.",
                location: "2341 River Street, Troy NY, 12180",
                openHour:"6 pm - 12 am",
                menu:"",
                review:"",
                }}
            />
            {/* More content like upcoming events can be added here */}
        </div>
    );
}

export default VenueProfile;
