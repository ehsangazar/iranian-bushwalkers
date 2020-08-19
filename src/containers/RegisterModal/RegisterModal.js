import React from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from '../Icon/loading.gif'
import logoImage from '../Header/logo.png'
import { Link } from 'react-router-dom'

const RegisterModal = ({
  showRegisterModal,
  formRegisterValues,
  handleCloseRegisterModal,
  isLoadingRegisterForm,
  handleSubmitRegister,
  handleChangeRegisterForm,
  responseOfApiRegister,
}) => {
  return (
    <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
      <Form onSubmit={!isLoadingRegisterForm ? handleSubmitRegister : null}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="btn-with-loading">
              {isLoadingRegisterForm && (
                <img className="loading" src={loading} alt="loading" />
              )}
              Register
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register-body">
            <img src={logoImage} alt="register-image" />
            <div className="register-body-form">
              {responseOfApiRegister && (
                <Alert variant={responseOfApiRegister.type}>
                  {responseOfApiRegister.message}
                </Alert>
              )}
              <Form.Group controlId="formBasicText">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeRegisterForm('first_name', event)
                  }
                  type="text"
                  value={formRegisterValues.first_name}
                  placeholder="Please enter your first name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeRegisterForm('last_name', event)
                  }
                  type="text"
                  value={formRegisterValues.last_name}
                  placeholder="Please enter your last name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(event) => handleChangeRegisterForm('email', event)}
                  type="email"
                  value={formRegisterValues.email}
                  placeholder="Please enter your email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeRegisterForm('mobile', event)
                  }
                  type="Number"
                  value={formRegisterValues.mobile}
                  placeholder="Please enter your mobile"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Full Address</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeRegisterForm('address', event)
                  }
                  type="Text"
                  value={formRegisterValues.address}
                  placeholder="Please enter your address"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Postcode</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeRegisterForm('postcode', event)
                  }
                  type="Number"
                  value={formRegisterValues.postcode}
                  placeholder="Please enter your postcode"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Emergency Contact Name</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeRegisterForm('emergency-name', event)
                  }
                  type="Text"
                  value={formRegisterValues['emergency-name']}
                  placeholder="Please enter your emergency contact name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Emergency Contact Number</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeRegisterForm('emergency-number', event)
                  }
                  type="Mobile"
                  value={formRegisterValues['emergency-number']}
                  placeholder="Please enter your emergency contact number"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(event) =>
                    handleChangeRegisterForm('password', event)
                  }
                  type="password"
                  value={formRegisterValues.password}
                  placeholder="Please enter your password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <div>
                  <h5>ACKNOWLEDGEMENT OF RISKS AND OBLIGATIONS OF MEMBERS</h5>
                  <div>
                    <p>
                      This acknowledgement of risks applies to all club
                      activities I may undertake as a member of Iranian
                      Bushwalkers (The Club).
                      <br />
                      In voluntarily participating in activities of the Club
                      which are described to me by the activity leaders I am
                      aware that my participation in the activities may expose
                      me to hazards and risks that could lead to injury, illness
                      or death or to loss of or damage to my property.
                      <br />
                      I also acknowledge that I may encounter weather conditions
                      that could lead to hypothermia and being in locations
                      where evacuation for medical treatment may take hours or
                      days. In particular when participating in abseiling or
                      above the snowline activities I am aware that these
                      activities could expose me to additional hazards and risks
                      described to me by the activity leader.
                      <br />
                      To minimise risks I will endeavour to ensure that
                      <br />
                    </p>
                    <ul>
                      <li>1. Each activity is within my capabilities </li>
                      <li>
                        2. I am carrying food, water and equipment appropriate
                        for the activity.{' '}
                      </li>
                      <li>
                        3. I will advise the activity leader if I am taking any
                        medication or have any physical or other limitation that
                        might affect my participation in the activity.{' '}
                      </li>
                      <li>
                        4. I will make every effort to remain with the rest of
                        the party during the activity{' '}
                      </li>
                      <li>
                        5. I will advise the leader of any concerns I am having,
                        and{' '}
                      </li>
                      <li>
                        6. I will comply with all reasonable instructions of
                        club officers and the activity leader.
                      </li>
                    </ul>
                    <p>
                      I have read and understand the above requirements. I have
                      considered the risks before choosing to sign this
                      acknowledgement of risk. I still wish to join the
                      activities of the Club. I acknowledge that I will take
                      responsibility for my own actions and that signing this
                      form and the payment of my subscription will be deemed as
                      full acceptance and understanding of the above conditions.
                    </p>
                  </div>
                </div>
                <Form.Check
                  onChange={(event) =>
                    handleChangeRegisterForm('checkbox-risk', event)
                  }
                  type="checkbox"
                  label="I agree to the text above"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <div className="code-of-conduct-checkbox">
                  <Form.Check
                    onChange={(event) =>
                      handleChangeRegisterForm('checkbox-conduct', event)
                    }
                    type="checkbox"
                    label=""
                  />
                  <div>
                    I confirm that I will comply with all provisions of the{' '}
                    <br />
                    <Link to="/code-of-conduct">Code of Conduct</Link>.
                  </div>
                </div>
              </Form.Group>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            disabled={isLoadingRegisterForm}
          >
            Register
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default RegisterModal
