import React from 'react';
import { Table } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useGetOrdersQuery } from '../slices/ordersApiSlice';
import { useGetUsersQuery } from '../slices/usersApiSlice'; // Assuming you have this hook

const AwardScreen = () => {
  const {
    data: orders,
    isLoading: loadingOrders,
    error: errorOrders,
  } = useGetOrdersQuery();
  const {
    data: users,
    isLoading: loadingUsers,
    error: errorUsers,
  } = useGetUsersQuery();

  // Filter and sort users by claimedCredits
  const showcasingUsers = users
    ?.filter((user) => user.showcaseCredits)
    .sort((a, b) => b.claimedCredits - a.claimedCredits);

  return (
    <div className='award-container'>
      <h1>Most Recent Buyer</h1>
      {loadingOrders ? (
        <Loader />
      ) : errorOrders ? (
        <Message variant='danger'>
          {errorOrders?.data?.message || errorOrders.error}
        </Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>USER</th>
              <th>TONs</th>
              <th>ADDRESS</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .slice()
              .reverse()
              .map((order) => (
                <tr key={order._id}>
                  <td>{order.user && order.user.name}</td>
                  <td>
                    {order.orderItems.reduce((acc, item) => acc + item.qty, 0)}
                  </td>
                  <td>{order.shippingAddress.state}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}

      <h1>Most Carbon Credit Claimer</h1>
      {loadingUsers ? (
        <Loader />
      ) : errorUsers ? (
        <Message variant='danger'>
          {errorUsers?.data?.message || errorUsers.error}
        </Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>USER</th>
              <th>TONs</th>
              <th>STATE</th>
            </tr>
          </thead>
          <tbody>
            {showcasingUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.displayName || user.name}</td>
                <td>{user.claimedCredits}</td>
                <td>{user.state}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AwardScreen;
