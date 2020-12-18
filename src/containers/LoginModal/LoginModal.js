import React from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from '../Icon/loading.gif'
import logoImage from '../Header/logo.png'
import { Link } from 'react-router-dom'

const LoginModal = ({
  showLoginModal,
  formLoginValues,
  handleCloseLoginModal,
  isLoadingLoginForm,
  handleSubmitLogin,
  handleChangeLoginForm,
  handleOpenRegisterModal,
  responseOfApiLogin,
  handleOpenForgotModal,
}) => {
  return (
    <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
      <Form onSubmit={!isLoadingLoginForm ? handleSubmitLogin : null}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="btn-with-loading">
              {isLoadingLoginForm && (
                <img alt="login modal" className="loading" src={loading} />
              )}
              Login
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register-body">
            <img src={logoImage} alt="register" />
            <div className="register-body-form">
              {responseOfApiLogin && (
                <Alert variant={responseOfApiLogin.type}>
                  {responseOfApiLogin.message}
                </Alert>
              )}
              {responseOfApiLogin && responseOfApiLogin.notActive && (
                <Alert variant={responseOfApiLogin.type}>
                  You need to verify your email first, please check your mail and click on {`"Confirm Email"`} button.
                </Alert>
              )}
              {responseOfApiLogin && responseOfApiLogin.notActive && (
                <Alert variant={responseOfApiLogin.type}>
                  if you have not recieved any email, <a href={`/?verificationEmail=${responseOfApiLogin.id}`}>click here </a>
                </Alert>
              )}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(event) => handleChangeLoginForm('email', event)}
                  type="email"
                  value={formLoginValues.email}
                  placeholder="Please enter your email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(event) => handleChangeLoginForm('password', event)}
                  type="password"
                  value={formLoginValues.password}
                  placeholder="Please enter your password"
                />
              </Form.Group>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>          
          <Button
            variant="primary"
            type="submit"
            disabled={isLoadingLoginForm} 
          >
            Login
          </Button>
          <a
            className="link"
            onClick={() => {
              handleOpenRegisterModal()
              handleCloseLoginModal()
            }}
          >
            Do not have an account, Register First
          </a>
          <a
            className="link"
            onClick={() => {
              handleOpenForgotModal()
              handleCloseLoginModal()
            }}
          >
            Forgot your password?
          </a>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default LoginModal
