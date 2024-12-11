import { Container, Row, Col } from 'react-bootstrap';
import "../css/VenueCard.css"; 
import VenueCard from './VenueCard'; // Component for individual venue cards

const VenueContainer = (venues) => {
  const venueList = venues['venues'];
  return (
    <div>
      {venueList.map((v, index) => 
        <VenueCard 
          name={v.name} 
          location={v.location} 
          key={index}
        />
      )}
    </div>
  );
};

export default VenueContainer;
