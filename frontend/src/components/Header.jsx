import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
// import SearchBox from './SearchBox';
import logo from '../assets/logo.png';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation(); //get the actual function to call

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout()); //clear the local storage
      // NOTE: here we need to reset cart state for when a user logs out so the next
      // user doesn't inherit the previous users cart and shipping
      dispatch(resetCart());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <Navbar
        bg='primary'
        variant='dark'
        expand='lg'
        collapseOnSelect
        className='custom-navbar'
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} alt='SunflowerCO2' className='navbar-brand-img' />
              SunflowerCO2
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {/* <SearchBox /> */}
              <Nav.Link as={NavLink} to='/' exact>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to='/about'>
                Learn
              </Nav.Link>
              <Nav.Link as={NavLink} to='/award'>
                Leaderboard
              </Nav.Link>
              {/* only one product at the beginning */}
              <Nav.Link as={NavLink} to='/product/669917ff27f5323535ba5430'>
                Purchase
              </Nav.Link>
              <Nav.Link as={NavLink} to='/faq'>
                FAQs
              </Nav.Link>
              {/* <Nav.Link as={NavLink} to='/news'>
                News
              </Nav.Link> */}
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link as={NavLink} to='/login'>
                  <FaUser /> Sign In
                </Nav.Link>
              )}

              {/* Admin Links */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              <Nav.Link as={NavLink} to='/cart'>
                <FaShoppingCart /> Cart
                {cartItems.length > 0 && (
                  <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
