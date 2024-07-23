import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useClaimCreditMutation } from '../slices/creditsApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../slices/authSlice';

const ClaimScreen = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [claimCredit, { isLoading }] = useClaimCreditMutation();

  const handleClaim = async (claimCode) => {
    setErrorMessage(''); // Reset error message
    try {
      await claimCredit({ code: claimCode }).unwrap();
      setMessage('Credit registered successfully');
      toast.success('Credit registered successfully');
      localStorage.removeItem('code'); // Remove code from localStorage after successful claim
      localStorage.removeItem('isClaimProcessed'); // Remove processed flag from localStorage after successful claim
    } catch (err) {
      const errorText = err?.data?.message || 'Failed to register credit';
      setErrorMessage(errorText);
      toast.error(errorText);
    }
  };

  useEffect(() => {
    const storedCode = localStorage.getItem('code');
    const isClaimProcessed =
      localStorage.getItem('isClaimProcessed') === 'true';
    if (storedCode && user && !isClaimProcessed) {
      setCode(storedCode);
      localStorage.setItem('isClaimProcessed', 'true'); // Set processed flag in localStorage
      handleClaim(storedCode);
    }
    // This comment disables the exhaustive-deps rule for this effect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setErrorMessage('');

    if (!user) {
      localStorage.setItem('code', code); // Store code in localStorage
      navigate(`/login?redirect=/claim`);
    } else {
      handleClaim(code);
    }
  };

  return (
    <div className='claim-container'>
      <h1>Register your Carbon Offset</h1>
      {message && (
        <Alert variant='success'>
          {message}, <Link to='/profile'>go to my profile</Link>
        </Alert>
      )}
      {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
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
