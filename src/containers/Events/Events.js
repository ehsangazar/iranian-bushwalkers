import React, {useState,useEffect} from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import { Container, Row , Table, Form,Alert } from 'react-bootstrap'
import Space from '../Space/Space'
import { Link } from 'react-router-dom'
import fetchHandler from '../../utils/fetchHandler'
import LoadingPage from '../LoadingPage/LoadingPage'
import { format, differenceInDays } from 'date-fns'

const Events = () => {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [search, setSearch] = useState(null)

  const getEvents = async () => {
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: `/api/v1/event/list`,
      })
      if (result?.data?.success) {
        setEvents(result.data.events)
        setFilteredEvents(result.data.events)
      } else {
        setEvents([])
        setFilteredEvents([])
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleSearch = (event) => {
    if (event) event.preventDefault()
    setSearch(event.target.value)
  }

  useEffect(()=>{
    if (!search || search === '' || search === null){
      setFilteredEvents(events)
    } else {
      const newUsers = events.filter((event) => {
        if (event.name.toLowerCase().includes(search.toLowerCase())) return true
        return false
      })
      setFilteredEvents(newUsers)
    }
  },[search])

  useEffect(()=>{
    getEvents()
  }, [])

  if (!events && events.length === 0) {
    return (
      <LoadingPage />
    )
  }

  const activeEvents = filteredEvents.filter((event)=> {
      return differenceInDays(new Date(event.end_date),new Date()) > 1
  })

  const pastEvents = filteredEvents.filter((event)=> {
      return differenceInDays(new Date(event.end_date),new Date()) <= 1
  })

  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="Events" />
        <Space />
        <Container>
          <Row style={{
              padding: '20px', 
              paddingBottom: 0,
              width: '100%',
              margin: 0,
            }}
          >
            <Form.Group  style={{
              width: '100%'
            }}
            >
              <h3>Search Events</h3>
              <Form.Control
                onChange={handleSearch}
                type="text"
                value={search}
                placeholder="Search Events"                
              />
            </Form.Group>
            <Row>
              <p style={{padding: '0', margin: 0, fontSize: 15}}>
                You can also checkout all the events on 
                <a
                  href="http://facebook.com/iranianBushwalkers/events"
                  data-toggle="dropdown"
                  className="menu-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{paddingLeft: '5px'}}
                >
                  Facebook
                </a>
              </p>
            </Row>
          </Row>
          <Space></Space>
          <h4>Active Events</h4>
          <Row style={{padding: '10px', overflowX: 'auto'}}>
            {activeEvents.length === 0 && (
            <Alert
              variant={'info'}
              style={{
                    width: '100%',
                  }}
            >
                  No active event found
            </Alert>
            )}
            {activeEvents.length > 0 && (
              <Table striped bordered hover>
                <thead>
                  <td>Event Number</td>
                  <td>Name</td>
                  <td>Leader</td>
                  <td>Max Users</td>
                  <td>Start Date</td>
                  <td>End Date</td>
                  <td>Event Link</td>
                </thead>
                <tbody>
                  {activeEvents.map(event => (
                    <tr>
                      <td>{event.event_number}</td>
                      <td>{event.name}</td>
                      <td><Link to={`/user/${event.user.id}`}>{`${event.user.first_name} ${event.user.last_name}`}</Link></td>
                      <td>{event.max_users}</td>
                      <td>{format(new Date(event.start_date),'MM/dd/yyyy')}</td>
                      <td>{format(new Date(event.end_date),'MM/dd/yyyy')}</td>
                      <td><Link to={`/event/${event.id}`}>View Event</Link></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
          )}
          </Row>
          <Space></Space>
          <h4>Past Events</h4>
          <Row style={{padding: '10px', overflowX: 'auto'}}>
            <Table striped bordered hover>
              <thead>
                <td>Event Number</td>
                <td>Name</td>
                <td>Max Users</td>
                <td>Start Date</td>
                <td>End Date</td>
                <td>Event Link</td>
              </thead>
              <tbody>
                {filteredEvents.filter((event)=> {
                  return differenceInDays(new Date(event.end_date),new Date()) <= 1
                }).map(event => (
                  <tr>
                    <td>{event.event_number}</td>
                    <td>{event.name}</td>
                    <td>{event.max_users}</td>
                    <td>{format(new Date(event.start_date),'MM/dd/yyyy')}</td>
                    <td>{format(new Date(event.end_date),'MM/dd/yyyy')}</td>
                    <td><Link to={`/event/${event.id}`}>View Event</Link></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
        <Space />
      </Layout>
    </div>
  )
}

export default Events
