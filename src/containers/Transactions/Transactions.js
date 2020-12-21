import React, {useState,useEffect} from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import { Container, Row , Table, Form, Badge } from 'react-bootstrap'
import Space from '../Space/Space'
import { Link } from 'react-router-dom'
import fetchHandler from '../../utils/fetchHandler'
import LoadingPage from '../LoadingPage/LoadingPage'
import { format, differenceInDays } from 'date-fns'

const Transactions = () => {
  const [memberships, setMemberships] = useState([])
  const [filterMemberships, seFilteredMemberships] = useState([])
  const [search, setSearch] = useState(null)

  const getUsers = async () => {
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: `/api/v1/membership/list`,
        auth: true,
      })
      if (result?.data?.success) {
        setMemberships(result.data.memberships)
        seFilteredMemberships(result.data.memberships)
      } else {
        setMemberships([])
        seFilteredMemberships([])
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
      seFilteredMemberships(memberships)
    } else {
      const newUsers = memberships.filter((membership) => {
        if (membership.transaction_id.toLowerCase().includes(search.toLowerCase())) return true
        if (membership.user.first_name.toLowerCase().includes(search.toLowerCase())) return true
        if (membership.user.last_name.toLowerCase().includes(search.toLowerCase())) return true
        return false
      })
      seFilteredMemberships(newUsers)
    }
  },[search])

  useEffect(()=>{
    getUsers()
  }, [])

  if (!memberships && memberships.length === 0) {
    return (
      <LoadingPage />
    )
  }

  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="Transactions" />
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
                placeholder="Search Transactions"                
              />
            </Form.Group>
          </Row>
          <Row style={{padding: '20px', overflowX: 'auto'}}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>
                    Image
                  </td>
                  <td>
                    Transaction ID
                  </td>
                  <td>
                    Membership Type
                  </td>
                  <td>
                    Name
                  </td>
                  <td>
                    Role
                  </td>
                  <td>
                    Purchase Date	
                  </td>
                  <td>
                    Expiray Date	
                  </td>
                  <td>
                    Status	
                  </td>
                  <td>
                    Link
                  </td>
                </tr>
              </thead>
              <tbody>
                {filterMemberships.map(membership => (
                  <tr>
                    <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={membership.user.image} alt={`${membership.user.first_name} ${membership.user.last_name}`} /></td>
                    <td>{membership.transaction_id}</td>
                    <td>{membership.membership_type === 'annual' ? <Badge variant="warning">Annual</Badge> : <Badge variant="info">Temp</Badge>}</td>
                    <td>{`${membership.user.first_name} ${membership.user.last_name}`}</td>
                    <td>{membership.user.role==='admin' ? 'Board Member' : 'Member'}</td>
                    <td>
                      {format(new Date(membership.created_at),'MM/dd/yyyy')}
                    </td>
                    <td>
                      {membership.membership_type === 'annual' &&
                        format(new Date(membership.user.expiry_date),'MM/dd/yyyy')
                      }
                    </td>
                    <td>
                      {membership.membership_type === 'annual' && differenceInDays(new Date(membership.created_at),new Date(membership.user.expiry_date)) > 1 && (<Badge variant="danger">Used</Badge>)}
                      {membership.membership_type === 'annual' && differenceInDays(new Date(membership.created_at),new Date(membership.user.expiry_date)) < 2 && (<Badge variant="success">Active</Badge>)}
                      {membership.membership_type === 'temp' && membership.used === 0 && (<Badge variant="success">Active</Badge>)}
                      {membership.membership_type === 'temp' && membership.used === 1 && (<Badge variant="danger">Used</Badge>)}
                    </td>
                    <td><Link to={`/user/${membership.user.id}`}>View User</Link></td>
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

export default Transactions
