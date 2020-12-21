import React, {useState,useEffect,useContext} from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import { Container, Row , Table, Badge, Button, Alert } from 'react-bootstrap'
import Space from '../Space/Space'
import fetchHandler from '../../utils/fetchHandler'
import LoadingPage from '../LoadingPage/LoadingPage'
import MyApp from '../../contexts/MyApp'
import {
  useParams, Link
} from "react-router-dom";
import { format, differenceInDays } from 'date-fns'

const SinglEvent = () => {
  const [singlEvent, setSingleEvent] = useState(null)
  const [singleEventUsers, setSingleEventUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(null)
  let params = useParams();
  const app = useContext(MyApp)

  const getSingleEvent = async () => {
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: `/api/v1/event/${params.id}`,
      })
      if (result?.data?.success) {
        setSingleEvent(result.data.events)
      } else {
        setSingleEvent([])
      }
    } catch (e) {
      console.error(e)
    }
  }

  const getSingleEventUsers = async () => {
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: `/api/v1/event/${params.id}/users`,
      })
      if (result?.data?.success) {
        setSingleEventUsers(result.data.eventUsers)
      } else {
        setSingleEventUsers([])
      }
    } catch (e) {
      console.error(e)
    }
  }

  const joinEvent = async () => {
    setIsLoading(true)
    try {
      const result = await fetchHandler({
        method: 'POST',
        url: `/api/v1/event/join`,
        auth: true,
        body: {
          eventId: singlEvent.id,
          userId: app.user.userData.id
        }
      })
      if (result?.data?.success) {
        getSingleEventUsers()
        setMessage({
          type: 'success',
          message: result.data.message
        })
      } else {
        getSingleEventUsers()
        setMessage({
          type: 'danger',
          message: result.data.message
        })
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoading(false)
  }

  const isPastEvent = () => {
    return differenceInDays(new Date(singlEvent.end_date),new Date()) <= 1
  }

  useEffect(()=>{
    getSingleEvent()
    getSingleEventUsers()
  }, [])

  if (!singlEvent) {
    return (
      <LoadingPage />
    )
  }

  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title={singlEvent.name} />
        <Space />
        <Container>
          <Row style={{
              padding: '20px', 
              paddingBottom: 0,
              width: '100%',
              margin: 0,
            }}
          >
            <Space></Space>
            <h4>
              Details {` `}
              {isPastEvent() ? <Badge variant="danger">Past Event</Badge> : <Badge variant="info">Future Event</Badge>}
            </h4>
            <Row style={{padding: '10px', width: '100%', overflowX: 'auto'}}>
              <Table striped bordered hover>
                <thead>
                  <td>Event Number</td>
                  <td>Name</td>
                  <td>Leader</td>
                  <td>Max Users</td>
                  <td>Start Date</td>
                  <td>End Date</td>
                  <td>Facebook Link</td>
                  {!isPastEvent() && (
                    <td>Actions</td>
                  )}
                </thead>
                <tbody>
                  <tr>
                    <td>{singlEvent.event_number}</td>
                    <td>{singlEvent.name}</td>
                    <td><Link to={`/user/${singlEvent.user.id}`}>{`${singlEvent.user.first_name} ${singlEvent.user.last_name}`}</Link></td>
                    <td>{singlEvent.max_users}</td>
                    <td>{format(new Date(singlEvent.start_date),'MM/dd/yyyy')}</td>
                    <td>{format(new Date(singlEvent.end_date),'MM/dd/yyyy')}</td>
                    <td><a href={singlEvent.facebook_link} target="_blank" rel="noopener noreferrer">Facebook Link</a></td>
                    {!isPastEvent() && (
                      <td>
                        <Button disabled={isLoading} variant="primary" onClick={joinEvent}>
                          {isLoading? 'loading' : 'Join this Event'}
                        </Button>
                      </td>
                    )}
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Row>
        </Container>
        {message && message.type && (
          <Container
            style={{
              width: '100%',
            }}
          >
            <Row style={{
                paddingTop: 0,
                paddingBottom: 0,
                width: '100%',
                margin: 0,
              }}
            >
              <Alert
                variant={message.type}
                style={{
                  width: '100%',
                }}
              >
                {message.message}
              </Alert>
            </Row>
          </Container>
        )}
        <Container>          
          <Row style={{
              padding: '20px', 
              paddingTop: 0,
              paddingBottom: 0,
              width: '100%',
              margin: 0,
              overflowX: 'hidden'
            }}
          >
            <Space></Space>
            <h4>
              Hikers
            </h4>
            <Space></Space>
            {(!singleEventUsers || singleEventUsers.length  === 0 ) && (
              <Alert
                variant={'info'}
                style={{
                  width: '100%',
                }}
              >
                No hiker has joined in yet
              </Alert>
            )}
            {singleEventUsers && singleEventUsers.length > 0 && (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>View</td>
                  </tr>
                </thead>
                <tbody>
                  {singleEventUsers && singleEventUsers.map(item => (
                    <tr>
                      <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={item.user.image} alt={`${item.user.first_name} ${item.user.last_name}`} /></td>
                      <td>{`${item.user.first_name} ${item.user.last_name}`}</td>
                      <td><Link to={`/user/${item.user.id}`}>View</Link></td>
                    </tr>
                    ))}
                </tbody>
              </Table>
            )}
          </Row>
        </Container>
        <Space />
      </Layout>
    </div>
  )
}

export default SinglEvent
