import React, { useState } from 'react'
import logoImage from './logo.png'
import { Link, useRouteMatch } from 'react-router-dom'
import { BsFillCaretDownFill } from 'react-icons/bs'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  let match = useRouteMatch()

  const handleToggleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  console.log('match', match)

  return (
    <header
      id="navbar-spy"
      className="header header-2 header-topbar header-light header-fixed"
    >
      <div id="top-bar" className="top-bar bg-theme">
        <div className="container">
          <div className="row clearfix">
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
          <Link className="navbar-brand" to="/">
            <img
              className="logo logo-dark"
              src={logoImage}
              alt="Iranian Bushwalkers Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleShowMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarContent"
            style={{
              display: showMobileMenu ? 'block' : 'none',
            }}
          >
            <ul className="navbar-nav ml-auto">
              <li
                className={`has-dropdown ${match.path === '/' ? 'active' : ''}`}
              >
                <Link
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li
                className={`has-dropdown ${
                  match.path === '/about' ? 'active' : ''
                }`}
              >
                <Link
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li
                className={`has-dropdown ${
                  match.path === '/events' ? 'active' : ''
                }`}
              >
                <a
                  href="http://facebook.com/iranianBushwalkers/events"
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                >
                  Events
                </a>
              </li>

              <li className={`has-dropdown`}>
                <a
                  href="/#"
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                  data-hover="shop"
                >
                  More
                  {` `}
                  <BsFillCaretDownFill />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/grading-system-guideline">
                      Grading System Guideline
                    </Link>
                  </li>
                  <li>
                    <Link to="/useful-links">Useful Links</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/code-of-conduct">Code Of Conduct</Link>
                  </li>
                </ul>
              </li>

              <li
                className={`has-dropdown ${
                  match.path === '/contact' ? 'active' : ''
                }`}
              >
                <Link
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="module-container">
              <div className="module module-consultation pull-left">
                <a
                  href="https://www.joinit.org/o/iranian-bushwalkers"
                  className="btn btn-success"
                >
                  Membership
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
