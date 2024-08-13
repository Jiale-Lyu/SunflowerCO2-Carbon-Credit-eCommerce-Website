import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQScreen = () => {
  return (
    <div className='faq'>
      <h1 className='faq-title'>Frequently Asked Questions</h1>
      <Accordion defaultActiveKey={['0']} alwaysOpen className='faq-list py-3'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>What are carbon credits?</Accordion.Header>
          <Accordion.Body>
            Carbon credits represent a unit of carbon dioxide (CO2) equivalent
            that is reduced, avoided, or removed from the atmosphere to
            compensate for emissions occurring elsewhere.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>How do carbon credits work?</Accordion.Header>
          <Accordion.Body>
            Carbon credits work by incentivizing projects that reduce greenhouse
            gas emissions. When a project reduces emissions, it earns carbon
            credits, which can be sold to individuals or organizations looking
            to offset their own emissions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>
            Why should I purchase carbon credits?
          </Accordion.Header>
          <Accordion.Body>
            Purchasing carbon credits allows individuals and businesses to take
            responsibility for their carbon footprint by supporting projects
            that reduce greenhouse gas emissions. It's a tangible way to
            contribute to climate change mitigation efforts.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>
            How do I calculate my carbon footprint?
          </Accordion.Header>
          <Accordion.Body>
            You can estimate your carbon footprint here:&nbsp;
            <a
              href='https://coolclimate.org/calculator'
              target='_blank'
              rel='noreferrer'
            >
              https://coolclimate.org/calculator
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4'>
          <Accordion.Header>
            What types of projects generate carbon credits?
          </Accordion.Header>
          <Accordion.Body>
            Carbon credits can be generated from a variety of projects including
            renewable energy, energy efficiency, reforestation, and methane
            capture projects.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='5'>
          <Accordion.Header>How are carbon credits verified?</Accordion.Header>
          <Accordion.Body>
            Carbon credits are verified by third-party organizations to ensure
            that the emissions reductions are real, measurable, and permanent.
            Verification standards such as the Verified Carbon Standard (VCS)
            and Gold Standard are commonly used.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='6'>
          <Accordion.Header>
            Can individuals buy carbon credits?
          </Accordion.Header>
          <Accordion.Body>
            Yes! Individuals can purchase carbon credits to offset their
            personal carbon footprint. Simply create an account with
            SunflowerCO2 and purchase carbon credits!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='7'>
          <Accordion.Header>
            How do businesses benefit from buying carbon credits?
          </Accordion.Header>
          <Accordion.Body>
            Businesses can benefit from buying carbon credits by demonstrating
            their commitment to sustainability, improving their corporate social
            responsibility (CSR) profile, and meeting regulatory requirements
            for carbon emissions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='8'>
          <Accordion.Header>
            Are there different types of carbon credits?
          </Accordion.Header>
          <Accordion.Body>
            Yes, there are different types of carbon credits, including
            compliance credits used to meet regulatory requirements and
            voluntary credits used by individuals and organizations to offset
            their emissions on a voluntary basis.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='9'>
          <Accordion.Header>
            How can I ensure the carbon credits I purchase are legitimate?
          </Accordion.Header>
          <Accordion.Body>
            SunflowerCO2 purchases large carbon credit contracts that are
            verified by VERRA.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h2 className='py-3'>Have any other questions?</h2>
      <p>
        Don't hesitate to send us an email with your enquiry or statement at:
      </p>
      <p>
        <a href='mailto:sunflowerco2info@gmail.com'>
          sunflowerco2info@gmail.com
        </a>
      </p>
    </div>
  );
};

export default FAQScreen;
