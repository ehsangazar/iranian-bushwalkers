import React, {useState,useEffect} from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import { Container, Row , Table, Form } from 'react-bootstrap'
import Space from '../Space/Space'
import { Link } from 'react-router-dom'
import fetchHandler from '../../utils/fetchHandler'
import LoadingPage from '../LoadingPage/LoadingPage'

const Events = () => {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [search, setSearch] = useState(null)

  const getUsers = async () => {
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: `/api/v1/user/members`,
      })
      if (result?.data?.success) {
        setUsers(result.data.users)
        setFilteredUsers(result.data.users)
      } else {
        setUsers([])
        setFilteredUsers([])
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
      setFilteredUsers(users)
    } else {
      const newUsers = users.filter((user) => {
        if (user.first_name.toLowerCase().includes(search.toLowerCase())) return true
        if (user.last_name.toLowerCase().includes(search.toLowerCase())) return true
        return false
      })
      setFilteredUsers(newUsers)
    }
  },[search])

  useEffect(()=>{
    getUsers()
  }, [])

  if (!users && users.length === 0) {
    return (
      <LoadingPage />
    )
  }

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
              <h3>Search</h3>
              <Form.Control
                onChange={handleSearch}
                type="text"
                value={search}
                placeholder="Search here"                
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
          <Row style={{padding: '20px'}}>
            <Table striped bordered hover>
              <tbody>
                {filteredUsers.map(user => (
                  <tr>
                    <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={user.image} alt={`${user.first_name} ${user.last_name}`} /></td>
                    <td>{`${user.first_name} ${user.last_name}`}</td>
                    <td>{user.role==='admin' ? 'Board Member' : 'Member'}</td>
                    <td><Link to={`/user/${user.id}`}>View</Link></td>
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
