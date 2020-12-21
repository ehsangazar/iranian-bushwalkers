import React, { useEffect, useState, useContext } from 'react'
import Layout from '../Layout/Layout'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import { Container, Row , Col, Table, Alert, Badge } from 'react-bootstrap'
import Space from '../Space/Space'
import fetchHandler from '../../utils/fetchHandler'
import NotFound from '../NotFound/NotFound'
import { Link ,
  useParams
} from 'react-router-dom'
import MyApp from '../../contexts/MyApp'
import LoadingPage from '../LoadingPage/LoadingPage'

import { format, differenceInDays } from 'date-fns'

const SingleUser = (props) => {
  const [userDetails, setUserDetails] = useState({})
  const [eventDetails, setEventDetails] = useState([])
  const [tempMembership, setTempMemberships] = useState([])
  const [annualMembership, setAnnualMemberships] = useState([])
  let params = useParams();
  const app = useContext(MyApp)

  const getUser = async () => {
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: `/api/v1/user/${params.id}`,
      })
      if (result?.data?.success) {
        setUserDetails(result.data.user)
        getMembership(result.data.user.id)
      } else {
        setUserDetails(null)
      }
    } catch (e) {
      console.error(e)
    }
  }
  const getEvents = async () => {
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: `/api/v1/user/${params.id}/events`,
      })
      if (result?.data?.success) {
        setEventDetails(result.data.events)
      } else {
        setEventDetails(null)
      }
    } catch (e) {
      console.error(e)
    }
  }
  const getMembership = async (userId) => {
    try {
      const result = await fetchHandler({
        method: 'POST',
        url: `/api/v1/membership/search`,
        body: {
          userId,
        }
      })
      if (result?.data?.success) {
        setTempMemberships(result.data.memberships
                        .filter(membership => membership.membership_type === "temp"))
        setAnnualMemberships(result.data.memberships
                        .filter(membership => membership.membership_type === "annual"))
      } else {
        setTempMemberships(null)
        setAnnualMemberships(null)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(()=>{
    getUser()
    getEvents()
  }, [])
  
  if (userDetails === null) {
    return (
      <NotFound />
    )
  }
  if (!userDetails.first_name) {
    return (
      <LoadingPage />
    )
  }
  
  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title={`${userDetails.first_name} ${userDetails.last_name}`} />

        <Space />
        <Container style={{maxWidth: '1000px'}}>
          <Row>
            <Col>
              <Row style={{padding: '20px'}}>
                <Col sm={3}>
                  <img style={{width: '100%', paddingRight: '10px'}} src={userDetails.image} alt={`${userDetails.first_name} ${userDetails.last_name}`} />
                  <Space />
                </Col>
                <Col>
                  <Row>
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>
                            {`${userDetails.first_name} ${userDetails.last_name}`}
                          </td>
                        </tr>
                        <tr>
                          <td>Role</td>
                          <td>
                            {userDetails.role==='admin' ? 'Board Member' : 'Member'}
                            {userDetails.leader ? ', Leader' : ''}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Row>
                  <Row style={{width: '100%', overflowX: 'auto'}}>
                    <Space />
                    <h5>
                      Temporary Membership
                    </h5>
                    <Space />
                    <div style={{width: '100%'}}>
                      {(!tempMembership || tempMembership.length === 0) && 
                        <Alert variant="warning">No temp membership is available</Alert>
                      }
                    </div>
                    {tempMembership.length > 0 && (
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <td>Transaction ID</td>
                            <td>Purchase Date</td>
                            <td>Status</td>
                          </tr>
                        </thead>
                        <tbody>
                          {tempMembership
                          .map(membership => (
                            <tr>
                              <td>
                                {membership.transaction_id}
                              </td>
                              <td>
                                {format(new Date(membership.created_at),'MM/dd/yyyy')}
                              </td>
                              <td>
                                {membership.used?<Badge variant="danger">Used</Badge>:<Badge variant="success">Active</Badge>}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                  )}
                  </Row>
                  <Row style={{width: '100%', overflowX: 'auto'}}>
                    <Space />
                    <h5>
                      Annual Membership
                    </h5>
                    <Space />
                    <div style={{width: '100%'}}>
                      {(!annualMembership || annualMembership.length === 0) && 
                        <Alert variant="warning">No annual membership is available</Alert>
                      }
                    </div>
                    {annualMembership.length > 0 && (
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <td>Transaction ID</td>
                            <td>Purchase Date</td>
                            <td>Expiray Date</td>
                            <td>Status</td>
                          </tr>
                        </thead>
                        <tbody>
                          {annualMembership
                          .slice(0,1)
                          .map(membership => (
                            <tr>
                              <td>
                                {membership.transaction_id}
                              </td>
                              <td>
                                {format(new Date(membership.created_at),'MM/dd/yyyy')}
                              </td>
                              <td>
                                {format(new Date(userDetails.expiry_date),'MM/dd/yyyy')}
                              </td>
                              <td>
                                {differenceInDays(new Date(membership.created_at),new Date(userDetails.expiry_date)) > 1?<Badge variant="danger">Expired</Badge>:<Badge variant="success">Active</Badge>}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    )}
                  </Row>
                  <Row style={{width: '100%', overflowX: 'auto'}}>
                    <Space />
                    <h5>
                      Events
                    </h5>
                    <Space />
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <td>Event Number</td>
                          <td>Name</td>
                          <td>Start Date</td>
                          <td>End Date</td>
                          <td>Event Link</td> 
                        </tr>
                      </thead>
                      <tbody>
                        {eventDetails.map(singleEvent => (
                          <tr>
                            <td>{singleEvent.event.event_number}</td>
                            <td>{singleEvent.event.name}</td>
                            <td>{format(new Date(singleEvent.event.start_date),'MM/dd/yyyy')}</td>
                            <td>{format(new Date(singleEvent.event.end_date),'MM/dd/yyyy')}</td>
                            <td><Link to={`/event/${singleEvent.event.id}`}>View Event</Link></td>
                          </tr>
                          )
                        )}
                      </tbody>
                    </Table>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Space />
      </Layout>
    </div>
  )
}

export default SingleUser
