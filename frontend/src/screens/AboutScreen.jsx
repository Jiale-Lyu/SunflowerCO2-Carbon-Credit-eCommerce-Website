import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AboutScreen = () => {
  return (
    <div className='about-container'>
      <h1>About Us</h1>
      <br />

      {/* <h3>Your Simple Path to Environmental Impact</h3> */}
      <p>
        At Sunflower.com, we're dedicated to making it easy for you to
        contribute to a greener planet. We've partnered with Verra, a leading
        global carbon credit certification organization, to purchase a 1,000-ton
        carbon credit contract.
      </p>
      <br />

      <h3>About Verra</h3>
      <p>
        <a href='https://verra.org/' target='_blank' rel='noreferrer'>
          Verra
        </a>
        &nbsp;is renowned for its rigorous standards and certification programs
        that ensure the integrity of carbon credits. Their projects span across
        the globe, focusing on reducing greenhouse gas emissions, promoting
        sustainable development, and protecting ecosystems. When you invest in a
        carbon credit certified by Verra, you can trust that it represents
        genuine, high-quality emission reductions.
      </p>

      <br />

      <h3>Our Carbon Offset Card</h3>
      <p>
        Our Carbon Offset Card To simplify your involvement, we've transformed
        this large contract into 1,000 individual Carbon Offset Cards. Each card
        represents one ton of carbon credits from our Verra-backed contract. By
        purchasing a Carbon Offset Card, you are directly supporting the
        reduction of one ton of carbon emissions.
      </p>
      <p>
        Here's why our Carbon Offset Cards are a meaningful and impactful
        choice:
      </p>
      <div className='about-reason'>
        <Row>
          <Col md={6}>
            <div className='about-text'>
              <h3>Direct Impact</h3>
              <p>
                Each Carbon Offset Card is backed by a portion of our 1,000-ton
                contract, ensuring that your purchase has a real and measurable
                impact on the environment.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img src='../images/about1.jpg' alt='env_image' />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <img src='../images/about2.jpg' alt='env_image' />
          </Col>
          <Col>
            <div className='about-text'>
              <h4>Accessibility</h4>
              <p>
                Traditionally, carbon credits are sold in large quantities,
                making it difficult for individuals to contribute. Our cards
                break down this barrier, allowing you to participate in carbon
                offsetting in a manageable way.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className='about-text'>
              <h4>Permanent Commitment</h4>
              <p>
                Once we've purchased the carbon credit contract, we do not sell
                it again. This means that your investment in a Carbon Offset
                Card is secure and dedicated solely to offsetting carbon
                emissions.
              </p>
            </div>
          </Col>
          <Col>
            <img src='../images/about3.jpg' alt='env_image' />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <img src='../images/about4.jpg' alt='env_image' />
          </Col>
          <Col>
            <div className='about-text'>
              <h4>Environmental Stewardship</h4>
              <p>
                By choosing our Carbon Offset Card, you are taking a tangible
                step toward mitigating climate change and supporting a
                sustainable future.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <p>
        Every card you purchase helps reduce the carbon footprint and promotes
        cleaner air and a healthier planet. Join us in making a difference—one
        Carbon Offset Card at a time. Visit&nbsp;
        <a href='http://sunflower.com/' target='_blank' rel='noreferrer'>
          Sunflower.com
        </a>
        &nbsp;to learn more and purchase your Carbon Offset Card today.
        Together, we can create a brighter, greener future.
      </p>

      <br />
      <br />
      <br />
      <h3>Contact Information</h3>
      <p>
        <b>Email: </b>
        <a href='mailto:sunflowerco2info@gmail.com'>
          sunflowerco2info@gmail.com
        </a>
      </p>
      <p>
        <b>Location: </b> Boston, MA
      </p>
    </div>
  );
};

export default AboutScreen;
