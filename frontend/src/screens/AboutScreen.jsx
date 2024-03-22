import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AboutScreen = () => {
  return (
    <div>
      <h1>About Us</h1>
      <br />
      <br />
      <br />
      <h3>Our Commitment</h3>
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
          <h3>Why Carbon Offset?</h3>
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
          <img src='../images/homeimg.jpg' alt='env_image' />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <h3>Our Approach</h3>
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
      <h3>Contact Information</h3>
      <p>
        <b>Email:</b> support@carbonfar.com
      </p>
      <p>
        <b>Location:</b> 1 Main St, San Jose, CA 95131
      </p>
      <p>
        <b>Phone:</b> 888-888-8888
      </p>
    </div>
  );
};

export default AboutScreen;
