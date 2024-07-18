import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useClaimCreditMutation } from '../slices/creditsApiSlice';

const ClaimScreen = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [claimCredit, { isLoading, isError, error }] = useClaimCreditMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/login?redirect=/claim');
    setErrorMessage(''); // Reset error message

    try {
      await claimCredit({ code }).unwrap();
      setMessage('Credit registered successfully');
      toast.success('Credit registered successfully');
    } catch (err) {
      if (err?.data?.message) {
        setErrorMessage(err.data.message);
        toast.error(err.data.message);
      } else {
        toast.error('Failed to register credit');
      }
    }
  };

  return (
    <div className='claim-container'>
      <h1>Register your Carbon Offset</h1>
      {message && <Alert variant='success'>{message}</Alert>}
      {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
      {isError && (
        <Alert variant='danger'>
          {error?.data?.message || 'Failed to claim credit'}
        </Alert>
      )}
      <Form onSubmit={handleSubmit} className='claim-form'>
        <Form.Group controlId='code'>
          <Form.Label>
            Please enter the 8-Digit Code on the back of the carbon offset card
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter code'
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' disabled={isLoading}>
          {isLoading ? <Loader /> : 'Register Carbon Offset'}
        </Button>
      </Form>
    </div>
  );
};

export default ClaimScreen;
