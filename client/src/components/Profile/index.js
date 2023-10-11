import React from 'react';

const Profile = ({ profileData }) => {
    return (
        <div>
            {/* Display Profile Data */}
            <h2>{profileData.name}</h2>
            <img src={profileData.imageURL} alt={profileData.name} />
            <p>{profileData.description}</p>
        </div>
    );
}

export default Profile;

