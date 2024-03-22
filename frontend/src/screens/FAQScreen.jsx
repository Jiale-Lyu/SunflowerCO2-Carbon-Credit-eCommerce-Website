import React from 'react';

const FAQScreen = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className='faq'>
        <h2>1. What are carbon credits?</h2>
        <p>
          Carbon credits represent a unit of carbon dioxide (CO2) equivalent
          that is reduced, avoided, or removed from the atmosphere to compensate
          for emissions occurring elsewhere.
        </p>
      </div>
      <div className='faq'>
        <h3>2. How do carbon credits work?</h3>
        <p>
          Carbon credits work by incentivizing projects that reduce greenhouse
          gas emissions. When a project reduces emissions, it earns carbon
          credits, which can be sold to individuals or organizations looking to
          offset their own emissions.
        </p>
      </div>
      <div className='faq'>
        <h3>3. Why should I purchase carbon credits?</h3>
        <p>
          Purchasing carbon credits allows individuals and businesses to take
          responsibility for their carbon footprint by supporting projects that
          reduce greenhouse gas emissions. It's a tangible way to contribute to
          climate change mitigation efforts.
        </p>
      </div>
      <div className='faq'>
        <h3>4. How do I calculate my carbon footprint?</h3>
        <p>
          You can calculate your carbon footprint using our carbon calculator
          tool on the website. Simply input information about your lifestyle,
          travel, and energy usage, and the calculator will estimate your carbon
          emissions.
        </p>
      </div>
    </div>
  );
};

export default FAQScreen;
