import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useProfileMutation } from '../slices/usersApiSlice';
import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
import { useGetMyClaimedCreditsQuery } from '../slices/creditsApiSlice';
import { Link } from 'react-router-dom';

const states = [
  { label: 'Alabama', value: 'AL' },
  { label: 'Alaska', value: 'AK' },
  { label: 'Arizona', value: 'AZ' },
  { label: 'Arkansas', value: 'AR' },
  { label: 'California', value: 'CA' },
  { label: 'Colorado', value: 'CO' },
  { label: 'Connecticut', value: 'CT' },
  { label: 'Delaware', value: 'DE' },
  { label: 'Florida', value: 'FL' },
  { label: 'Georgia', value: 'GA' },
  { label: 'Hawaii', value: 'HI' },
  { label: 'Idaho', value: 'ID' },
  { label: 'Illinois', value: 'IL' },
  { label: 'Indiana', value: 'IN' },
  { label: 'Iowa', value: 'IA' },
  { label: 'Kansas', value: 'KS' },
  { label: 'Kentucky', value: 'KY' },
  { label: 'Louisiana', value: 'LA' },
  { label: 'Maine', value: 'ME' },
  { label: 'Maryland', value: 'MD' },
  { label: 'Massachusetts', value: 'MA' },
  { label: 'Michigan', value: 'MI' },
  { label: 'Minnesota', value: 'MN' },
  { label: 'Mississippi', value: 'MS' },
  { label: 'Missouri', value: 'MO' },
  { label: 'Montana', value: 'MT' },
  { label: 'Nebraska', value: 'NE' },
  { label: 'Nevada', value: 'NV' },
  { label: 'New Hampshire', value: 'NH' },
  { label: 'New Jersey', value: 'NJ' },
  { label: 'New Mexico', value: 'NM' },
  { label: 'New York', value: 'NY' },
  { label: 'North Carolina', value: 'NC' },
  { label: 'North Dakota', value: 'ND' },
  { label: 'Ohio', value: 'OH' },
  { label: 'Oklahoma', value: 'OK' },
  { label: 'Oregon', value: 'OR' },
  { label: 'Pennsylvania', value: 'PA' },
  { label: 'Rhode Island', value: 'RI' },
  { label: 'South Carolina', value: 'SC' },
  { label: 'South Dakota', value: 'SD' },
  { label: 'Tennessee', value: 'TN' },
  { label: 'Texas', value: 'TX' },
  { label: 'Utah', value: 'UT' },
  { label: 'Vermont', value: 'VT' },
  { label: 'Virginia', value: 'VA' },
  { label: 'Washington', value: 'WA' },
  { label: 'West Virginia', value: 'WV' },
  { label: 'Wisconsin', value: 'WI' },
  { label: 'Wyoming', value: 'WY' },
];

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [state, setState] = useState('');
  const [showcaseCredits, setShowcaseCredits] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [stateError, setStateError] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const {
    data: orders,
    isLoading: loadingOrders,
    error: errorOrders,
  } = useGetMyOrdersQuery();
  const {
    data: credits,
    isLoading: loadingCredits,
    error: errorCredits,
  } = useGetMyClaimedCreditsQuery();

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
    setDisplayName(userInfo.username); // Default to username
    setState(userInfo.state || '');
    setShowcaseCredits(userInfo.showcaseCredits || false);
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        await updateProfile({
          name,
          email,
          password,
          displayName,
          state,
          showcaseCredits,
        }).unwrap();
        toast.success('Profile updated successfully');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const handleShowcaseSubmit = async (e) => {
    e.preventDefault();
    if (!state) {
      setStateError(true);
      return;
    }
    setStateError(false);
    try {
      await updateProfile({
        displayName,
        state,
        showcaseCredits: true,
      }).unwrap();
      toast.success('Showcase updated successfully');
      setShowModal(false);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  // Calculate total claimed credits
  const totalClaimedCredits = credits ? credits.totalCredits : 0;

  return (
    <Row className='profile-body'>
      <Col md={3}>
        <h2>User Profile</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className='my-2' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
          {loadingUpdateProfile && <Loader />}
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>
            {errorOrders?.data?.message || errorOrders.error}
          </Message>
        ) : (
          <Table striped hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <FaTimes style={{ color: 'red' }} />
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <FaTimes style={{ color: 'red' }} />
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className='btn-sm' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <br />
        <br />
        <br />

        <h2>
          You have Registered {totalClaimedCredits} TONS of CARBON OFFSETS in
          total
        </h2>

        {loadingCredits ? (
          <Loader />
        ) : errorCredits ? (
          <Message variant='danger'>
            {errorCredits?.data?.message || errorCredits.error}
          </Message>
        ) : (
          <>
            {totalClaimedCredits > 0 && (
              <Table striped hover responsive className='table-sm'>
                <thead>
                  <tr>
                    <th>CODE</th>
                    <th>CLAIM DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {credits.credits.map((credit) => (
                    <tr key={credit._id}>
                      <td>{credit.code}</td>
                      <td>{credit.updatedAt.substring(0, 10)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
            {totalClaimedCredits > 0 && (
              <Button
                variant='primary'
                className='profile-showcase-button'
                onClick={() => setShowModal(true)}
              >
                Showcase My Contribution
              </Button>
            )}
          </>
        )}

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Showcase Your Contribution</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleShowcaseSubmit}>
              <Form.Group className='my-2' controlId='displayName'>
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter display name'
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className='my-2' controlId='state'>
                <Form.Label>State</Form.Label>
                <Form.Control
                  as='select'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value=''>Select state</option>
                  {states.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </Form.Control>
                {stateError && (
                  <div style={{ color: 'red', marginTop: '5px' }}>
                    Please select your state to present
                  </div>
                )}
              </Form.Group>

              <Button type='submit' variant='primary'>
                Save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <p className='showcase-p'>
          Your contribution is shown in <Link to='/award'>Leaderboard</Link>
        </p>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
