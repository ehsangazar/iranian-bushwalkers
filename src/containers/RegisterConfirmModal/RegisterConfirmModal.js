import React from 'react'
import { Modal, Alert } from 'react-bootstrap'
import loading from '../Icon/loading.gif'
import logoImage from '../Header/logo.png'

const RegisterConfirmModal = ({
  showConfirmEmailModal,
  handleCloseConfirmEmailModal,
  isLoadingRegisterConfirmModal,
}) => {
  return (
    <Modal show={showConfirmEmailModal} onHide={handleCloseConfirmEmailModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="btn-with-loading">
            {isLoadingRegisterConfirmModal && (
              <img className="loading" src={loading} />
            )}
            Confirm Email
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="loading-modal">
        <div className="register-body">
          <img src={logoImage} alt="register-image" />
          <div className="newsletter-body-form">
            {isLoadingRegisterConfirmModal && (
              <img className="loading" src={loading} />
            )}
            {!isLoadingRegisterConfirmModal && (
              <Alert variant={'success'}>
                Your email has been activated successfully. Thanks
              </Alert>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RegisterConfirmModal
