import React from 'react';
import Profile from '../../components/Profile';

const VenueProfile = () => {
    // Sample Data, this would ideally come from an API
    const venueData = {
        name: "Awesome Venue",
        imageURL: "/path/to/image.jpg", // Placeholder
        description: "A great venue for live music events."
    };

    return (
        <div>
            <Profile profileData={venueData} />
            {/* More content like upcoming events can be added here */}
        </div>
    );
}

export default VenueProfile;
