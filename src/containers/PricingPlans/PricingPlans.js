import React, { useContext } from 'react'
import MyApp from '../../contexts/MyApp'
import { Button } from 'react-bootstrap'
import Space from '../Space/Space'

const PricingPlans = () => {
  const app = useContext(MyApp)

  const handleOpenTempMembership = (event) => {
    if (event && !app.user.userData.id) event.preventDefault()
    if (!app.user.userData.id) app.modal.setModalToShow('login')    
  }

  const handleOpenAnnualMembership = (event) => {
    if (event && !app.user.userData.id) event.preventDefault()
    if (!app.user.userData.id) app.modal.setModalToShow('login')    
  }

  const handleSubmitTransactionId = () => {
    if (!app.user.userData.id) {
      app.modal.setModalToShow('login') 
      return 
    }
    app.modal.setModalToShow('transaction')
  }

  return (
    <section id="pricing1" className="pricing pricing-1 bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="heading heading-1 mb-50">
              <p className="heading--subtitle">Our Pricing Plans</p>
              <h2 className="heading--title">
                Find the best offer to enjoy our events
              </h2>
              <p className="heading--desc mb-25">
                We have two types of membership, find the one that suits you
                better and continue further to buy or subscribe. There are so
                many members in our group and we would love to have you, too.
              </p>
              <h5>Follow these steps to renew a membership</h5>
              <ul>
                <li>
                  1. Register/Login and validate your email
                </li>
                <li>
                  2. Pay your choose of membershp
                </li>
                <li>
                  3. Submit your transaction id
                </li>
                <li>
                  <Space />
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleSubmitTransactionId}
                  >
                  Submit Transaction ID
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7">
            <div className="row row-no-padding">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="price-table text--center">
                  <div className="pricing-panel pricing-active">
                    <div className="pricing--heading">
                      <h4>Annual Plan</h4>
                      <div className="pricing--desc">
                        Perfect for active hikers
                      </div>
                      <p>
                        <span className="currency">A$</span>50{' '}
                        <span className="time"> / year</span>
                      </p>
                    </div>

                    <div className="pricing--body">
                      <ul className="pricing--list list-unstyled">
                        <li>Join all Hiking events</li>
                        <li>Join all Movie events</li>
                        <li>Join all reading book events</li>
                        <li>Enjoy special offers and discounts</li>
                      </ul>
                    </div>
                    <a className="btn btn--primary btn--bordered" onClick={handleOpenAnnualMembership} target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UDP3PM3GDFWFS">
                      Subscribe now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="price-table text--center">
                  <div className="pricing-panel">
                    <div className="pricing--heading">
                      <h4>Temporary Ticket</h4>
                      <div className="pricing--desc">
                        Perfect for being a guest
                      </div>
                      <p>
                        <span className="currency">$</span>10{' '}
                        <span className="time"> / event</span>
                      </p>
                    </div>

                    <div className="pricing--body">
                      <ul className="pricing--list list-unstyled">
                        <li>Join the event</li>
                        <li>Enjoy the networking with others</li>
                      </ul>
                    </div>
                    <a onClick={handleOpenTempMembership} className="btn btn--primary btn--bordered" target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U4NH8SNY9Y7LQ">
                      Purchase now
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
