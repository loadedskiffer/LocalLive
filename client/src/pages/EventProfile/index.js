import React from 'react';
import Event from '../../components/Event/index.js';
import Profile from '../../components/Profile/index.js';

const EventProfile = () => {
    // Sample Data, this would ideally come from an API

    return (
        <div>
            <Profile
                data={{
                name: "Slidin Dirty",
                bio:
                    "This is a short description of our venue",
                location: "2341 River Street, Troy NY, 12180",
                openHour:"6 pm - 12 am",
                menu:"",
                review:"",
                technologies: [
                    "Javascript",
                    "React",
                    "Redux",
                    "Vue",
                    "Webpack",
                    "NodeJs",
                    "Webpack",
                ],
                creationDate: "01.01.2021",
                }}
            />
            {/* More content like upcoming events can be added here */}
        </div>
    );
}

export default EventProfile;
