import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer.js';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginVenueMutation } from '../slices/venuesApiSlice.js';
import { useRegisterVenueMutation } from '../slices/venuesApiSlice.js';
import { setCredentials } from '../slices/authSlice.js';
import { toast } from 'react-toastify';
import Loader from '../components/Loader.js';

const LoginForm = ({ onSwitchForm, onSubmit, formData, setFormData }) => (
  <FormContainer>
    <h1>Sign into your Venue account</h1>

    <Form onSubmit={onSubmit}>
      <Form.Group className='my-2' controlId='email'>
        <Form.Control
          type='email'
          placeholder='Enter email'
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value })}
        ></Form.Control>
      </Form.Group>

      <Form.Group className='my-2' controlId='password'>
        <Form.Control
          type='password'
          placeholder='Enter password'
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        ></Form.Control>
      </Form.Group>
      <Row className='py-3'>
        <Button
          // disabled={isLoading}
          type='submit'
          variant='primary'
          className='mt-3'
        >
          Sign In
        </Button>
      </Row>
    </Form>

    {/* {isLoading && <Loader />} */}

    <Row className='py-3'>
      <Button onClick={onSwitchForm}>
        I don't have an account yet
      </Button>
    </Row>
  </FormContainer>
);

const RegisterForm = ({ onSwitchForm, onSubmit, formData, setFormData }) => (
  <FormContainer>
    <h1>Sign up for a Venue account</h1>

    <Form onSubmit={onSubmit}>
      <Form.Group className='my-2' controlId='name'>
        <Form.Control
          type='name'
          placeholder='Enter name'
          value={formData.name}
          onChange={(e) =>  setFormData({ ...formData, name: e.target.value })}
        ></Form.Control>
      </Form.Group>
      <Form.Group className='my-2' controlId='email'>
        <Form.Control
          type='email'
          placeholder='Enter email'
          value={formData.email}
          onChange={(e) =>  setFormData({ ...formData, email: e.target.value })}
        ></Form.Control>
      </Form.Group>

      <Form.Group className='my-2' controlId='password'>
        <Form.Control
          type='password'
          placeholder='Enter password'
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        ></Form.Control>
      </Form.Group>

      <Form.Group className='my-2' controlId='confirmPassword'>
        <Form.Control
          type='confirmPassword'
          placeholder='confirm password'
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        ></Form.Control>
      </Form.Group>
      <Row className='py-3'>
        <Button
          // disabled={isLoading}
          type='submit'
          variant='primary'
          className='mt-3'
        >
          Sign Up
        </Button>
      </Row>
    </Form>

    {/* {isLoading && <Loader />} */}

    <Row className='py-3'>
      <Button onClick={onSwitchForm}>
        Already have an account
      </Button>
    </Row>
  </FormContainer>
);

const VenueAuth = () => {
  const [isLogin, setIsLogin] = useState(true); // Initial state to show login form
  const [formData, setFormData] = useState({name:'', email: '', password: '' , confirmPassword: ''});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginVenueMutation();
  const [register] = useRegisterVenueMutation();

  // const { userInfo } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/');
  //   }
  // }, [navigate, userInfo]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/venue/venue-home');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register(formData).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/venue/venue-home');
      } catch (err) {
        console.log(err);
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    setFormData({ email: '', password: '', confirmPassword: '', name: ''}); // Clear form data on switch
  };

  return (
    <div>
      
      {isLogin ? (
        <LoginForm
          onSwitchForm={toggleForm}
          onSubmit={handleLoginSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        <RegisterForm
          onSwitchForm={toggleForm}
          onSubmit={handleRegisterSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default VenueAuth;