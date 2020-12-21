import React, {useState,useEffect} from 'react'
import { Modal, Alert, Form, Button } from 'react-bootstrap'
import loading from '../Icon/loading.gif'
import fetchHandler from '../../utils/fetchHandler'
import { Link } from 'react-router-dom'

const CreateEventModal = ({
  showCreateEventModal,
  formCreateEventValues,
  handleCloseCreateEventModal,
  isLoadingCreateEventForm,
  handleSubmitCreateEvent,
  handleChangeCreateEventForm,
  responseOfApiCreateEvent,
}) => {
  const [leaders, setLeaders] = useState([])
  const getLeaders = async () => {
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: `/api/v1/user/members`,
      })
      if (result?.data?.success) {
        const leaderUsers = result.data.users.filter(item=>item.leader)
        setLeaders(leaderUsers)
      } else {
        setLeaders([])
      }
    } catch (e) {
      console.error(e)
    }
  }
  
  useEffect(()=>{
    getLeaders()
  }, [])

  return (
    <Modal show={showCreateEventModal} onHide={handleCloseCreateEventModal}>
      <Form onSubmit={!isLoadingCreateEventForm ? handleSubmitCreateEvent : null}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="btn-with-loading">
              {isLoadingCreateEventForm && (
                <img className="loading" src={loading} alt="loading" />
              )}
              Create Event
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register-body">
            <div className="register-body-form">
              {responseOfApiCreateEvent && (
                <Alert variant={responseOfApiCreateEvent.type}>
                  {responseOfApiCreateEvent.message}
                </Alert>
              )}
              {(!responseOfApiCreateEvent || responseOfApiCreateEvent.type !== 'success') && (
                <>
                  <Form.Group controlId="formBasicText">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control
                      required
                      onChange={(event) => {
                        handleChangeCreateEventForm('name', event)
                      }}
                      type="text"
                      value={formCreateEventValues.name}
                      placeholder="Please enter event name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicText">
                    <Form.Label>Event Number</Form.Label>
                    <Form.Control
                      required
                      onChange={(event) =>
                        handleChangeCreateEventForm('event_number', event)
                      }
                      type="number"
                      value={formCreateEventValues.event_number}
                      placeholder="Please enter event number"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Max Users</Form.Label>
                    <Form.Control
                      required
                      onChange={(event) => handleChangeCreateEventForm('max_users', event)}
                      type="number"
                      value={formCreateEventValues.max_users}
                      placeholder="Please enter max number of users"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Leader</Form.Label>
                    <Form.Control 
                      as="select"
                      onChange={(event) => handleChangeCreateEventForm('leader_id', event)}
                    >
                      {leaders.map(leader => (
                        <option value={leader.id}>
                          {`${leader.first_name} ${leader.last_name}`}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Facebook Link</Form.Label>
                    <Form.Control
                      required
                      onChange={(event) =>
                        handleChangeCreateEventForm('facebook_link', event)
                      }
                      type="text"
                      value={formCreateEventValues.facebook_link}
                      placeholder="Please enter facebook link"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                      required
                      onChange={(event) =>
                        handleChangeCreateEventForm('start_date', event)
                      }
                      type="datetime-local"
                      value={formCreateEventValues.start_date}
                      placeholder="Please enter start date"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      required
                      onChange={(event) =>
                        handleChangeCreateEventForm('end_date', event)
                      }
                      type="datetime-local"
                      value={formCreateEventValues.end_date}
                      placeholder="Please enter end date"
                    />
                  </Form.Group>
                </>
              )}
              {responseOfApiCreateEvent && responseOfApiCreateEvent.type !== 'success' && (
                <Alert variant={responseOfApiCreateEvent.type}>
                  {responseOfApiCreateEvent.message}
                </Alert>
              )}
            </div>
          </div>
        </Modal.Body>
        {(!responseOfApiCreateEvent || responseOfApiCreateEvent.type !== 'success') && (
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              disabled={isLoadingCreateEventForm}
            >
              Create Event
            </Button>          
          </Modal.Footer>
        )}
      </Form>
    </Modal>
  )
}

export default CreateEventModal
