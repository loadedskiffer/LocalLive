import { Container, Row, Col } from 'react-bootstrap';
import "../css/EventCard.css"
import EventCard from './EventCard';


const EventContainer = (events) => {
  console.log(events)
  const eventList = events['events'];
  return (
    <div>
      {eventList.map((e, index) => 
        <EventCard 
          name = {e.name}
          key = {index}
        />
      )}
    </div>
  );
};

export default EventContainer;

