import React from 'react'

const PricingPlans = () => {
  return (
    <section id="pricing1" className="pricing pricing-1 bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="heading heading-1 mb-50">
              <p className="heading--subtitle">Our Pricing Plans</p>
              <h2 className="heading--title">
                The Best Offers &amp; Price Plans For You!
              </h2>
              <p className="heading--desc mb-25">
                Find the perfect plan for your business, vision dominates a lot
                of our interpretation of the world. A design studio founded in
                London and expanded our services &amp; become a multinational
                firm, offering services Worldwide.
              </p>
              <a href="#" className="btn--underlined">
                compare plans
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7">
            <div className="row row-no-padding">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="price-table text--center">
                  <div className="pricing-panel pricing-active">
                    <div className="pricing--heading">
                      <h4>Starter Plan</h4>
                      <div className="pricing--desc">
                        Perfect for small business
                      </div>
                      <p>
                        <span className="currency">$</span>50{' '}
                        <span className="time"> / Monthly</span>
                      </p>
                    </div>

                    <div className="pricing--body">
                      <ul className="pricing--list list-unstyled">
                        <li>Five Brand Monitors</li>
                        <li>Five Keyword Monitors</li>
                        <li>Basic Quota , PDF reports</li>
                        <li>500 Search Results </li>
                      </ul>
                    </div>
                    <a className="btn btn--primary" href="#">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="price-table text--center">
                  <div className="pricing-panel">
                    <div className="pricing--heading">
                      <h4>Advanced Plan</h4>
                      <div className="pricing--desc">
                        Perfect for bigger interpieces
                      </div>
                      <p>
                        <span className="currency">$</span>99{' '}
                        <span className="time"> / Monthly</span>
                      </p>
                    </div>

                    <div className="pricing--body">
                      <ul className="pricing--list list-unstyled">
                        <li>Five Brand Monitors</li>
                        <li>Five Keyword Monitors</li>
                        <li>Basic Quota , PDF reports</li>
                        <li>500 Search Results </li>
                      </ul>
                    </div>
                    <a className="btn btn--primary btn--bordered" href="#">
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
