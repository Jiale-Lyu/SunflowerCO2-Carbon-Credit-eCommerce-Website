import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
// import {
//   checkCodeClaimed,
//   registerCarbonOffset,
// } from '../slices/carbonOffsetApiSlice'; // You need to create these slices
// import { selectUser } from '../slices/userSlice'; // Adjust the path according to your project structure

const ClaimScreen = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  //   const history = useHistory();
  //   const user = useSelector(selectUser);

  const claimHandler = () => {
    navigate('/login?redirect=/claim');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!user) {
    //     history.push('/login');
    // } else {
    //   const isClaimed = await dispatch(checkCodeClaimed(code)).unwrap();
    //   if (isClaimed) {
    //     setMessage('The code has already been registered.');
    //   } else {
    //     await dispatch().unwrap();
    //     //   registerCarbonOffset({ userId: user._id, code })
    //     setMessage(
    //       'You have successfully registered your carbon offset. 1 ton of credit has been added to your account.'
    //     );
    //   }
    // }
  };

  return (
    <div className='claim-container'>
      <h1>Register your Carbon Offset</h1>
      {message && <Alert variant='info'>{message}</Alert>}
      <Form onSubmit={handleSubmit} className='claim-form'>
        <Form.Group controlId='code'>
          <Form.Label>
            Please enter 8-Digit Code on the back of the carbon offset card
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter code'
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Register Carbon Offset
        </Button>
      </Form>
    </div>
  );
};

export default ClaimScreen;
