import React, {useState,useEffect} from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import hamid from "../BoardMembers/hamid.jpg"
import ehsan from "../BoardMembers/ehsan.png"
import { Container, Row , Col, Table } from 'react-bootstrap'
import Space from '../Space/Space'
import { Link } from 'react-router-dom'
import fetchHandler from '../../utils/fetchHandler'
import LoadingPage from '../LoadingPage/LoadingPage'

const Members = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: `/api/v1/user/members`,
      })
      if (result?.data?.success) {
        setUsers(result.data.users)
      } else {
        setUsers([])
      }
    } catch (e) {
      console.error(e)
    }
  }

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
        <ContentMiddleBackgroundSolid title="Members" />
        <Space />
        <Container>
          <Row>
            <Table striped bordered hover>
              <tbody>
                {users.map(user => (
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

export default Members
