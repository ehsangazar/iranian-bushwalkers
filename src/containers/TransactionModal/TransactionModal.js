import React from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from '../Icon/loading.gif'
import logoImage from '../Header/logo.png'

const TransactionModal = ({
  showTransactionModal,
  formTransactionValues,
  handleCloseTransactionModal,
  handleOpenTransactionModal,
  isLoadingTransactionForm,
  handleSubmitTransactionForm,
  handleChangeTransactionModal,
  responseOfTransactionApi,
}) => {
  return (
    <Modal show={showTransactionModal} onHide={handleCloseTransactionModal}>
      <Form onSubmit={!isLoadingTransactionForm ? handleSubmitTransactionForm : null}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="btn-with-loading">
              {isLoadingTransactionForm && (
                <img alt="login modal" className="loading" src={loading} />
              )}
              Submit Your Transaction ID
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register-body">
            <img src={logoImage} alt="register" />
            <div className="register-body-form">
              {responseOfTransactionApi && (
                <Alert variant={responseOfTransactionApi.type}>
                  {responseOfTransactionApi.message}
                </Alert>
              )}
              {(!responseOfTransactionApi || responseOfTransactionApi.type !== 'success') && (
                <>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Membership Type</Form.Label>
                    <Form.Control
                      as="select"
                      className="my-1 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                      custom
                      required
                      onChange={(event) => {
                        handleChangeTransactionModal('membership',event)
                      }}
                    >
                      <option>Choose Your Membership Type</option>
                      <option value="temp">
                      Temporary
                      </option>
                      <option value="annual">
                      Annual
                      </option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Transaction ID</Form.Label>
                    <Form.Control
                      onChange={(event) => handleChangeTransactionModal('transactionId', event)}
                      type="text"
                      required
                      value={formTransactionValues.transactionId}
                      placeholder="Please enter your transaction id after your payment"
                    />
                  </Form.Group>
                </>
              )}
            </div>
          </div>
        </Modal.Body>
        {(!responseOfTransactionApi || responseOfTransactionApi.type !== 'success') && (
          <Modal.Footer>          
            <Button
              variant="primary"
              type="submit"
              disabled={isLoadingTransactionForm} 
            >
              Submit
            </Button>
          </Modal.Footer>
        )}
      </Form>
    </Modal>
  )
}

export default TransactionModal
