import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Welcome to LocalLive</h1>
          <p className='text-center mb-4'>
            To get started please choose your account type to sign up or login!
          </p>
          <div className="btn-group-vertical w-50">
            <LinkContainer to="/venueAuth">
                <Button variant='primary' className='mb-3'>
                    Venue
                </Button>
            </LinkContainer>
            <LinkContainer to='/artistAuth'>
                <Button variant='primary' className='mb-3'>
                    Artist
                </Button>
            </LinkContainer>
            <LinkContainer to='/audienceAuth'>
                <Button variant='primary'>
                    Audience
                </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;