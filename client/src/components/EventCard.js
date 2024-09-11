import { Container, Row, Col } from 'react-bootstrap';

const EventCard = ({name}) => {
  return (
    <Container>
      {name}
    </Container>
  );
};

export default EventCard;