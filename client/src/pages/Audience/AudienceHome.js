import EventContainer from "../../components/EventContainer";
import '../../css/AudienceHome.css'
import { useGetEventsMutation} from '../../slices/usersApiSlice'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bannerImage from '../../Pictures/concert1.jpg'; // Adjust the path as needed

const AudienceHome = () => {
    const [allEvents, setAllEvents] = useState(['hi']); // Initial state 
    const [getEvents] = useGetEventsMutation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            // add error checking
            const res = await getEvents().unwrap();
            console.log(res);
            //using fake callback to make sure the state gets set, not ideal
            setAllEvents(res, () => {
                //console.log(allEvents)
            });
            // console.log(allEvents)
           
        }

        fetchData();
    }, []);
  

    const handleSavedEventsClick = () => {
        navigate('./AudienceSavedEvents.js'); 
    };

    return (
        <div>
            {/* Banner Section */}
            <div className="banner">
                <h1 className="banner-text">Welcome to Audience Home</h1>
            </div>

            {/* Button for Saved Events */}
            <div className="button-container">
                <button className="saved-events-button" onClick={handleSavedEventsClick}>
                    Saved Events
                </button>
            </div>

            {/* Events Section */}
            <div className="eventContainer">
                <EventContainer events={allEvents} />
            </div>
        </div>
    )
  };
  export default AudienceHome;