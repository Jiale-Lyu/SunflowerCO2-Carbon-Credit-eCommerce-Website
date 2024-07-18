import { Button } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import { useGetProductsQuery } from '../slices/productsApiSlice';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Product from '../components/Product';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Paginate from '../components/Paginate';
// import ProductCarousel from '../components/ProductCarousel';
// import Meta from '../components/Meta';

const HomeScreen = () => {
  // const { keyword } = useParams();
  const navigate = useNavigate();
  // const { pageNumber, keyword } = useParams();

  // const { data, isLoading, error } = useGetProductsQuery({
  //   keyword,
  //   pageNumber,
  // });
  const handlePurchaseClick = () => {
    navigate('/product/669917ff27f5323535ba5430');
  };
  const handleClaimClick = () => {
    navigate('/claim');
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
        <div className='button-group'>
          <Button variant='primary' onClick={handlePurchaseClick}>
            Purchase
          </Button>
          <Button variant='primary' onClick={handleClaimClick}>
            Credit Offset Registration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
