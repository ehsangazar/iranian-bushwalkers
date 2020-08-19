import React from 'react'
import logoImage from './logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header
      id="navbar-spy"
      className="header header-2 header-topbar header-light header-fixed"
    >
      <div id="top-bar" className="top-bar bg-theme">
        <div className="container">
          <div className="row clearfix">
            <div className="col">
              <p className="contact-info"></p>
              <p className="contact-info">
                <a href="tel:00201065370701"></a>
              </p>
              <p className="contact-info"></p>
            </div>
            <div className="col">
              <p className="contact-social pull-right">
                <a href="https://www.facebook.com/IranianBushwalkers/">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/iranianbushwalkers/">
                  <i className="fa fa-instagram"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav
        id="primary-menu"
        className="navbar navbar-expand-lg navbar-dark bg-white"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img
              className="logo logo-dark"
              src={logoImage}
              alt="Iranian Bushwalkers Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto">
              <li className="has-dropdown active">
                <Link
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="has-dropdown">
                <Link
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li className="has-dropdown">
                <a
                  href="https://www.joinit.org/o/iranian-bushwalkers"
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                >
                  Membership
                </a>
              </li>

              <li className="has-dropdown">
                <a
                  href="http://facebook.com/iranianBushwalkers/events"
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                >
                  Events
                </a>
              </li>

              {/* <li className="has-dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                  data-hover="shop"
                >
                  Tools
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="shop.html">shop sidebar</a>
                  </li>
                  <li>
                    <a href="shop-products.html">shop products</a>
                  </li>
                  <li>
                    <a href="shop-single.html">shop single</a>
                  </li>
                </ul>
              </li> */}

              <li className="has-dropdown">
                <a
                  href="/contact"
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
