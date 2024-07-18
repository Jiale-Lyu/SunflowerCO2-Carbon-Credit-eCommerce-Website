import { Table, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useGetOrdersQuery } from '../slices/ordersApiSlice';

const AwardScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <div className='award-container'>
      <h1>Most Rencent Buyer</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              {/* <th>ID</th> */}
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
                  {/* <td>{order._id}</td> */}
                  <td>{order.user && order.user.name}</td>
                  <td>{order.orderItems[0].qty}</td>
                  <td>{order.shippingAddress.state}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}

      <h1>Most Carbon Credit Claimer</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>USER</th>
              <th>TONs</th>
              <th>ADDRESS</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                {/* <td>{order._id}</td> */}
                <td>{order.user && order.user.name}</td>
                <td>{order.orderItems[0].qty}</td>
                <td>{order.shippingAddress.state}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AwardScreen;
