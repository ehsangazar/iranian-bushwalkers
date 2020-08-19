import React from 'react'
import logoImage from './logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer" className="footer footer-1">
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 footer--widget widget-about">
              <div className="widget--content">
                <img className="footer-logo" src={logoImage} alt="logo" />
                <p>
                  Affiliated by Bushwalking Victoria, Iranian Bushwalkers (IB)
                  is a non-profit club whose main activities with insurance
                  coverage include: - Hiking - Bushwalking - Social Activities
                </p>
                <div className="social--icons">
                  <a
                    href="https://www.facebook.com/IranianBushwalkers/"
                    className="facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/iranianbushwalkers/"
                    className="instagram"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 footer--widget widget--links">
              <div className="footer--widget-title">
                <h5>Organization</h5>
              </div>
              <div className="widget--content">
                <ul>
                  <li>
                    <Link to="/about">Home</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 footer--widget widget--contact-info">
              <div className="footer--widget-title">
                <h5>Contact Info</h5>
              </div>
              <div className="widget--content">
                <ul>
                  <li>
                    Email: <a href="#">admin@ib.org.au</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <div className="footer--bar">
        <div className="row">
          <div className="col-md-12 col-md-12 text--center footer--copyright">
            <div className="copyright">
              <span>© 2020 Iranian Bushwalkers</span>{' '}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
