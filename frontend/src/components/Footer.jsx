// import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* <div className='footer-link'>
        <a href='https://www.linkedin.com/'>LinkedIn</a>
        <a href='https://twitter.com/'>Twitter</a>
        <a href='https://www.appbrewery.co/'>Website</a>
      </div> */}
      {/* <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>CarbonFar &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container> */}
      <div className='container'>
        <footer className='py-3'>
          <ul className='nav justify-content-center pb-3 mb-3'>
            <li>
              <a href='/' className='px-2'>
                Home
              </a>
            </li>
            <li>
              <a href='/product' className='px-2'>
                Product
              </a>
            </li>
            <li>
              <a href='/faq' className='px-2'>
                FAQs
              </a>
            </li>
            <li>
              <a href='/about' className='px-2'>
                About
              </a>
            </li>
          </ul>
          <p className='text-center text-body-secondary'>
            CarbonFar &copy; {currentYear}
          </p>
        </footer>
      </div>
    </footer>
  );
};
export default Footer;
