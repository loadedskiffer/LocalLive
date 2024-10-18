import { Container, Row, Col } from 'react-bootstrap';

const EventCard = ({name}) => {
  return (
    <Container className="event-card"> {/* Apply the CSS class */}
      <Row>
        <Col>
          <h5 className="event-name">{name}</h5> {/* Apply the CSS class for styling */}
        </Col>
      </Row>
    </Container>
  );
};

export default EventCard;