import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import {
  useGetResetPasswordPageQuery,
  useResetPasswordMutation,
} from '../slices/usersApiSlice';
import { toast } from 'react-toastify';

const ResetPasswordScreen = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { isLoading, isError } = useGetResetPasswordPageQuery({ id, token });

  const [resetPassword, { isLoading: loadingUpdate }] =
    useResetPasswordMutation();

  useEffect(() => {
    // Handle error if user data loading fails
    if (isError) {
      toast.error('Invalid or expired token');
      navigate('/login'); // Redirect to login page if user data loading fails
    }
  }, [isError, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        await resetPassword({
          id,
          token,
          password,
        });
        setPassword('');
        setConfirmPassword('');
        toast.success('Your password has been reset successfully');
        navigate('/login');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <FormContainer>
      <h1>Reset Password</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>New Password *</Form.Label>
          <Form.Control
            type='password'
            // placeholder='Enter new password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Re-enter New Password *</Form.Label>
          <Form.Control
            type='password'
            // placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button disabled={isLoading} type='submit' variant='primary'>
          Save
        </Button>

        {loadingUpdate && <Loader />}
      </Form>
    </FormContainer>
  );
};

export default ResetPasswordScreen;
