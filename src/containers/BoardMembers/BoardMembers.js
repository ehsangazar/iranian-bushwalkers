import React from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import hamid from "./hamid.jpg"
import ehsan from "./ehsan.png"
import golsa from "./golsa.png"
import tannaz from "./tannaz.png"
import hamed from "./hamed.png"
import kazem from "./kazem.png"
import borzu from "./borzu.png"
import negar from "./negar.png"
import hoda from "./hoda.png"
import kamran from "./kamran.png"
import amir from "./amir.png"
import { Container, Row , Col, Table } from 'react-bootstrap'
import Space from '../Space/Space'
import { Link } from 'react-router-dom'

const BoardMembers = () => {
  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="Board Members" />
        <Space />
        <Container>
          <Row style={{padding: '20px', overflowX: 'auto'}}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Role</td>
                  <td>Link</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={hamid} alt="Hamid Ashouri" /></td>
                  <td>Hamid Ashouri</td>
                  <td>President</td>
                  <td><Link to="/user/33888620-e2d8-11ea-8d34-959e666cf071">View</Link></td>
                </tr>
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={negar} alt="Negar Asadian" /></td>
                  <td>Negar Asadian</td>
                  <td>Vice President</td>
                  <td><Link to="/user/fc58ffd0-3e7c-11eb-9f66-b90bc4559cd7">View</Link></td>
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
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={amir} alt="Amir Hakimian" /></td>
                  <td>Amir Hakimian</td>
                  <td>Board Member</td>
                  <td><Link to="/user/a4ea8990-3dae-11eb-9f66-b90bc4559cd7">View</Link></td>
                </tr>
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={kamran} alt="Kamran Motamedi" /></td>
                  <td>Kamran Motamedi</td>
                  <td>Board Member</td>
                  <td><Link to="/user/bdc0b180-3db1-11eb-9f66-b90bc4559cd7">View</Link></td>
                </tr>
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={kazem} alt="Kazem Ghabraie" /></td>
                  <td>Kazem Ghabraie</td>
                  <td>Board Member</td>
                  <td><Link to="/user/9eb2fff0-3d93-11eb-9f66-b90bc4559cd7">View</Link></td>
                </tr>
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={borzu} alt="Borzou Hosseini" /></td>
                  <td>Borzou Hosseini</td>
                  <td>Board Member</td>
                  <td><Link to="/user/bfa0e030-3dd2-11eb-9f66-b90bc4559cd7">View</Link></td>
                </tr>
                <tr>
                  <td><img style={{width: '100%', maxWidth: '100px', paddingRight: '10px'}} src={hoda} alt="Hoda Barazandeh" /></td>
                  <td>Hoda Barazandeh</td>
                  <td>Board Member</td>
                  <td><Link to="/user/4dfd7ef0-3eba-11eb-9f66-b90bc4559cd7">View</Link></td>
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
