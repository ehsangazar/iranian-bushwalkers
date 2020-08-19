import React from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from '../Icon/loading.gif'
import logoImage from '../Header/logo.png'

const ResetModal = ({
  showResetModal,
  formResetValues,
  handleCloseResetModal,
  isLoadingResetForm,
  handleSubmitReset,
  handleChangeResetForm,
  responseOfApiReset,
}) => {
  return (
    <Modal show={showResetModal} onHide={handleCloseResetModal}>
      <Form onSubmit={!isLoadingResetForm ? handleSubmitReset : null}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="btn-with-loading">
              {isLoadingResetForm && (
                <img
                  alt="reset password loading"
                  className="loading"
                  src={loading}
                />
              )}
              Reset Password
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register-body">
            <img src={logoImage} alt="register-image" />
            <div className="register-body-form">
              {responseOfApiReset && (
                <Alert variant={responseOfApiReset.type}>
                  {responseOfApiReset.message}
                </Alert>
              )}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(event) => handleChangeResetForm('password', event)}
                  type="password"
                  value={formResetValues.passowrd}
                  placeholder="Please enter a new password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeResetForm('password-confirmation', event)
                  }
                  type="password"
                  value={formResetValues['password-confirmation']}
                  placeholder="Please enter your new password again"
                />
              </Form.Group>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" disabled={isLoadingResetForm}>
            Reset Password
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ResetModal
