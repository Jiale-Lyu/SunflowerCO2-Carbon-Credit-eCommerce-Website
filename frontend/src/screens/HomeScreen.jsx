import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
// import Product from '../components/Product';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
// import Meta from '../components/Meta';

const HomeScreen = () => {
  const { keyword } = useParams();
  // const { pageNumber, keyword } = useParams();

  // const { data, isLoading, error } = useGetProductsQuery({
  //   keyword,
  //   pageNumber,
  // });

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {/* {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )} */}
      <br />
      <br />
      <br />
      <h1>Our Commitment</h1>
      <p>
        We believe that every action, no matter how small, can make a
        significant difference in combating climate change. That's why we've
        dedicated ourselves to providing accessible and effective carbon
        offsetting solutions for everyone. Whether you're an individual looking
        to offset your personal carbon emissions or a business striving to
        achieve carbon neutrality, we're here to support you every step of the
        way.
      </p>
      <br />
      <br />
      <br />

      <Row>
        <Col md={7}>
          <h1>Why Carbon Offset?</h1>
          <p>
            Carbon offsetting is a crucial strategy in the fight against climate
            change. By investing in projects that reduce or capture greenhouse
            gas emissions, we can offset the carbon emissions produced by our
            daily activities, products, and services. From renewable energy
            initiatives to reforestation projects, carbon offsetting not only
            helps mitigate climate change but also promotes sustainable
            development and environmental conservation worldwide.
          </p>
          <p>
            Our Approach At Carbon Far, we are committed to transparency,
            integrity, and effectiveness in everything we do. We carefully vet
            and select carbon offset projects based on rigorous criteria,
            ensuring that your contributions have a real and measurable impact
            on reducing global carbon emissions. Additionally, we prioritize
            collaboration with local communities and stakeholders to maximize
            the social, economic, and environmental benefits of our projects.
          </p>
        </Col>
        <Col md={5}>
          <img src='../images/homeimg.jpg' alt='env_image' fluid />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <h1>Our Approach</h1>
      <p>
        At Carbon Far, we are committed to transparency, integrity, and
        effectiveness in everything we do. We carefully vet and select carbon
        offset projects based on rigorous criteria, ensuring that your
        contributions have a real and measurable impact on reducing global
        carbon emissions. Additionally, we prioritize collaboration with local
        communities and stakeholders to maximize the social, economic, and
        environmental benefits of our projects.
      </p>
      <br />
      <br />
      <br />
    </>
  );
};

export default HomeScreen;
