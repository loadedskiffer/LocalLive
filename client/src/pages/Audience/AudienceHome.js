import EventContainer from "../../components/EventContainer";
import '../../css/AudienceHome.css'
import { useGetEventsMutation} from '../../slices/usersApiSlice'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AudienceHome = () => {
    const [allEvents, setAllEvents] = useState(['hi']); // Initial state 
    const [getEvents] = useGetEventsMutation();


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
  

    return (
        <div>
            <h1>Audience Home</h1>
            <div className="eventContainer">
                <EventContainer
                    events = {allEvents}
                />
            </div>
        </div>
    )
  };
  export default AudienceHome;