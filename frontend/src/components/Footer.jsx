// import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-3 custom-footer'>
      {/* <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
        <li className='nav-item'>
          <a href='/' className='nav-link px-2'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a href='/product/668c2b2e880a302ac079bc78' className='nav-link px-2'>
            Purchase
          </a>
        </li>
        <li className='nav-item'>
          <a href='/faq' className='nav-link px-2'>
            FAQs
          </a>
        </li>
        <li className='nav-item'>
          <a href='/about' className='nav-link px-2'>
            Learn
          </a>
        </li>
      </ul> */}
      <p className='text-center'>© {currentYear} Carbonfar LLC</p>
    </footer>
  );
};
export default Footer;
