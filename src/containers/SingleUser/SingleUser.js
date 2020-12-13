import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import { Container, Row , Col, Table } from 'react-bootstrap'
import Space from '../Space/Space'
import fetchHandler from '../../utils/fetchHandler'
import NotFound from '../NotFound/NotFound'
import LoadingPage from '../LoadingPage/LoadingPage'
import {
  useParams
} from "react-router-dom";

const SingleUser = (props) => {
  const [userDetails, setUserDetails] = useState({})
  let params = useParams();

  const getUser = async () => {
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: `/api/v1/user/${params.id}`,
      })
      if (result?.data?.success) {
        setUserDetails(result.data.user)
      } else {
        setUserDetails(null)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(()=>{
    getUser()
  }, [])
  

  if (!userDetails) {
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
              <Row>
                <Col sm={3}>
                  <img style={{width: '100%', paddingRight: '10px'}} src={userDetails.image} alt={`${userDetails.first_name} ${userDetails.last_name}`} />
                </Col>
                <Col>
                  <Row>
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>Role</td>
                          <td>{userDetails.role==='admin' ? 'Board Member' : 'Member'}</td>
                        </tr>
                        <tr>
                          <td>Membership</td>
                          <td>{userDetails.role==='admin' ? 'Active' : 'Member'}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Row>
                  <Row>
                    <Space />
                    <h2>
                      Events
                    </h2>
                    <Space />
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>Date</td>
                          <td>Event Name</td>
                        </tr>
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
