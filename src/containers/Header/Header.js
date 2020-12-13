import React, { useState, useContext } from 'react'
import logoImage from './logo.png'
import Modals from '../Modals/Modals'
import { Link, useRouteMatch } from 'react-router-dom'
import { BsFillCaretDownFill, BsList } from 'react-icons/bs'
import MyApp from '../../contexts/MyApp'
import { Button, DropdownButton, Dropdown } from 'react-bootstrap'

const Header = () => {
  const app = useContext(MyApp)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  let match = useRouteMatch()

  const handleToggleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const handleOpenRegisterModal = () => {
    app.modal.setModalToShow('register')
  }

  const handleOpenLoginModal = () => {
    app.modal.setModalToShow('login')
  }

  const handleLogOut = () => {
    localStorage.setItem('token', '')
    app.user.setUserData({})
  }

  return (
    <header
      id="navbar-spy"
      className="header header-2 header-topbar header-light header-fixed"
    >
      <Modals />
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
            <BsList />
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
                <Link data-toggle="dropdown" className="menu-item" to="/">
                  Home
                </Link>
              </li>

              <li className={`has-dropdown`}>
                <a
                  href="/#"
                  data-toggle="dropdown"
                  className="menu-item"
                  data-hover="shop"
                >
                  About
                  {` `}
                  <BsFillCaretDownFill />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/about">
                      Who we are
                    </Link>
                  </li>
                  <li>
                    <Link to="/board-members">Board Members</Link>
                  </li>
                  <li>
                    <Link to="/members">Members</Link>
                  </li>
                </ul>
              </li>


              <li
                className={`has-dropdown ${
                  match.path === '/membership' ? 'active' : ''
                }`}
              >
                <Link
                  data-toggle="dropdown"
                  className="menu-item"
                  to="/membership"
                >
                  Membership
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
                  className="menu-item"
                >
                  Events
                </a>
              </li>

              <li className={`has-dropdown`}>
                <a
                  href="/#"
                  data-toggle="dropdown"
                  className="menu-item"
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
                  className="menu-item"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {!app.user.userData.id && (
              <div className="module-container buttons-header">
                <div className="module module-consultation pull-left">
                  <Button onClick={handleOpenRegisterModal} variant="success">
                    Register
                  </Button>
                </div>
                <div className="module module-consultation pull-left">
                  <Button onClick={handleOpenLoginModal} variant="warning">
                    Login
                  </Button>
                </div>
              </div>
            )}
            {app.user.userData.id && (
              <div className="module-container buttons-header loggedin">
                <h5>Hello {app.user.userData.first_name}!</h5>
                <DropdownButton id="dropdown-basic-button" title="Profile">
                  <Dropdown.Item href={`/user/${app.user.userData.id}`}>My Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogOut}>Log out</Dropdown.Item>
                </DropdownButton>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
