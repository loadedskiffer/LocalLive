import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer.js';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useCreateEventMutation } from '../../slices/venuesApiSlice.js';

const CreateEvent = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const venueId = userInfo._id;
    const [formData, setFormData] = useState({name:'', date: '', time: '', creator: 'v', venue: venueId, artist: '' , needTickets: false, pending: false, jointEvent: false});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [create] = useCreateEventMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('hi')
            const res = await create(formData).unwrap();
            navigate('/venue/venue-home');
            toast.success("Event successfully created")
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      };

    return (
        <FormContainer>
            <h1>Create new event</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className='my-2' controlId='name'>
                    <Form.Control
                    type='input'
                    placeholder='name the event'
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value })}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='artist'>
                    <Form.Control
                    type='input'
                    placeholder="who's performing?"
                    value={formData.artist}
                    onChange={(e) => setFormData({...formData, artist: e.target.value })}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='date'>
                    <Form.Control
                    type='date'
                    placeholder='date'
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='time'>
                    <Form.Control
                    type='time'
                    placeholder='time'
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='needTickets' check inline>
                    <Form.Check
                    label="this event requires tickets"
                    type='checkbox'
                    checked={formData.needTickets}
                    onChange={(e) => setFormData({ ...formData, needTickets: e.target.value })}
                    />
                </Form.Group>
                

                <Row className='py-3'>
                    <Button
                    type='submit'
                    variant='primary'
                    className='mt-3'
                    >
                    Create Event
                    </Button>
                </Row>
            </Form>
        </FormContainer>
    )
  };
  export default CreateEvent;