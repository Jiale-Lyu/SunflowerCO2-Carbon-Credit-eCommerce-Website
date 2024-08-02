import React from 'react';
import { Table } from 'react-bootstrap';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { useGetCreditsQuery } from '../slices/creditsApiSlice'; // Assuming you have this hook
import { useGetUsersQuery } from '../slices/usersApiSlice'; // Assuming you have this hook

const AwardScreen = () => {
  const {
    data: credits,
    isLoading: loadingCredits,
    error: errorCredits,
  } = useGetCreditsQuery();
  const {
    data: users,
    isLoading: loadingUsers,
    error: errorUsers,
  } = useGetUsersQuery();

  // Filter and sort users by claimedCredits
  const showcasingUsers = users
    ?.filter((user) => user.showcaseCredits)
    .sort((a, b) => b.claimedCredits - a.claimedCredits)
    .slice(0, 10); // Limit to top 10 users

  // Sort credits by update time (most recent first) and filter by claimed
  const recentClaimers = credits
    ?.filter((credit) => credit.isClaimed)
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .map((credit) => ({
      username: credit.user
        ? credit.user.displayName || credit.user.name
        : 'Unknown',
      state: credit.user ? credit.user.state : 'Unknown',
      time: new Date(credit.updatedAt).toLocaleDateString(),
    }));

  return (
    <div className='award-container'>
      <h1>Leaderboard</h1>
      <p>
        To show your claimed credit in Leaderboard, choose to showcase my
        contribution in <Link to='/profile'>your profile</Link>
      </p>
      <div className='table-container'>
        <div className='table-wrapper'>
          <h3>Most Recent Claimers</h3>
          {loadingCredits || loadingUsers ? (
            <Loader />
          ) : errorCredits || errorUsers ? (
            <Message variant='danger'>
              {errorCredits?.data?.message ||
                errorCredits.error ||
                errorUsers?.data?.message ||
                errorUsers.error}
            </Message>
          ) : (
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>USER</th>
                  <th>TONs</th>
                  <th>STATE</th>
                  <th>DATE</th>
                </tr>
              </thead>
              <tbody>
                {recentClaimers.map((claimer, index) => (
                  <tr key={index}>
                    <td>{claimer.username}</td>
                    <td>1</td>
                    <td>{claimer.state}</td>
                    <td>{claimer.time}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>

        <div className='table-wrapper'>
          <h3>Top 10 Carbon Credit Claimers</h3>
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
                  <th>RANK</th>
                  <th>USER</th>
                  <th>TONs</th>
                  <th>STATE</th>
                </tr>
              </thead>
              <tbody>
                {showcasingUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.displayName || user.name}</td>
                    <td>{user.claimedCredits}</td>
                    <td>{user.state}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
      {/* <p>
        To show your claimed credit in Leaderboard, go to{' '}
        <Link to='/profile'>your profile</Link> and choose to showcase my
        contribution
      </p> */}
    </div>
  );
};

export default AwardScreen;
