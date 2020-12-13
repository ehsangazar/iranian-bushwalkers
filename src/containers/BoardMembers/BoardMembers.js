import React from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import hamid from "./hamid.jpg"
import ehsan from "./ehsan.png"
import golsa from "./golsa.png"
import tannaz from "./tannaz.png"
import hamed from "./hamed.png"
import { Container, Row , Col, Table } from 'react-bootstrap'
import Space from '../Space/Space'
import { Link } from 'react-router-dom'

const BoardMembers = () => {
  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="BoardMembers" />
        <Space />
        <Container>
          <Row style={{padding: '20px'}}>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={hamid} alt="Hamid Ashouri" /></td>
                  <td>Hamid Ashouri</td>
                  <td>President</td>
                  <td><Link to="/user/33888620-e2d8-11ea-8d34-959e666cf071">View</Link></td>
                </tr>
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={ehsan} alt="Ehsan Gazar" /></td>
                  <td>Ehsan Gazar</td>
                  <td>Secretary</td>
                  <td><Link to="/user/4c5ac900-e284-11ea-a9a5-23f7e437bac0">View</Link></td>
                </tr>
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={golsa} alt="Golsa Amani" /></td>
                  <td>Golsa Amani</td>
                  <td>Treasurer</td>
                  <td><Link to="/user/507c5300-3d38-11eb-9f66-b90bc4559cd7">View</Link></td>
                </tr>
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={hamed} alt="Hamed Khalaj" /></td>
                  <td>Hamed Khalaj</td>
                  <td>Board Member</td>
                  <td><Link to="/user/9b145d60-3d3b-11eb-9f66-b90bc4559cd7">View</Link></td>
                </tr>
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={tannaz} alt="Tannaz Ketabi" /></td>
                  <td>Tannaz Ketabi</td>
                  <td>Board Member</td>
                  <td><Link to="/user/bce86ba0-3d3d-11eb-9f66-b90bc4559cd7">View</Link></td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
        <Space />
      </Layout>
    </div>
  )
}

export default BoardMembers
