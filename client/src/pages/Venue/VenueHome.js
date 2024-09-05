import { LinkContainer } from 'react-router-bootstrap';
import { Container, Card, Button } from 'react-bootstrap';

const VenueHome = () => {
    return (
        <div>
            <h1>Venue Home</h1>
            <LinkContainer to="/venue/create-event">
                <Button variant='primary' className='mb-3'>
                    Create new event
                </Button>
            </LinkContainer>
        </div>
    )
  };
  export default VenueHome;