import { Row, Col, Image, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Product from '../components/Product';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
// import Meta from '../components/Meta';

const HomeScreen = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  // const { pageNumber, keyword } = useParams();

  // const { data, isLoading, error } = useGetProductsQuery({
  //   keyword,
  //   pageNumber,
  // });
  const handleClick = () => {
    navigate('/product');
  };

  return (
    <div className='home-body'>
      <div className='home-content'>
        <h1>
          Buy <span className='bold-text'>Carbon Offsets</span>
          <br />
          for Sustainability
        </h1>

        <p>
          Welcome to our platform, your destination for purchasing carbon
          offsets. Take meaningful action to combat climate change by offsetting
          your carbon footprint. Our easy and transparent process ensures your
          contributions help build a sustainable future. Join us in making a
          positive impact on the environment.
        </p>
        <Button variant='primary' onClick={handleClick}>
          Purchase
        </Button>
      </div>
    </div>
  );
};

export default HomeScreen;
