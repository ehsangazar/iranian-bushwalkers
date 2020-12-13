import React from 'react'
import { Modal, Alert } from 'react-bootstrap'
import loading from '../Icon/loading.gif'
import logoImage from '../Header/logo.png'

const RegisterSendVerificationEmailModal = ({
  showSendVerificationEmailModal,
  handleCloseSendVerificationEmailModal,
  isLoadingRegisterSendEmailVerificationModal,
}) => {
  return (
    <Modal show={showSendVerificationEmailModal} onHide={handleCloseSendVerificationEmailModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="btn-with-loading">
            {isLoadingRegisterSendEmailVerificationModal && (
              <img
                alt="confirm modal loading"
                className="loading"
                src={loading}
              />
            )}
            Send Verification Email
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="loading-modal">
        <div className="register-body">
          <img src={logoImage} alt="register" />
          <div className="newsletter-body-form">
            {isLoadingRegisterSendEmailVerificationModal && (
              <img
                alt="confirm modal loading"
                className="loading"
                src={loading}
              />
            )}
            {!isLoadingRegisterSendEmailVerificationModal && (
              <Alert variant={'success'}>
                New Verification Email has been sent, please wait few minutes and refresh your mail, 
                <br />
                sometimes, you have to also check your spam folder.
              </Alert>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RegisterSendVerificationEmailModal
