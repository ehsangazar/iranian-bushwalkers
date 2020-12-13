import React from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import hamid from './hamid.jpg'
import ehsan from './ehsan.png'
import { Container, Row , Col } from 'react-bootstrap'
import Space from '../Space/Space'
import { Link } from 'react-router-dom'

const BoardMembers = () => {
  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="Board Members" />
        <Space />
        <Container style={{maxWidth: '600px'}}>
          <Row>
            <Col>
              <Link to="/user/33888620-e2d8-11ea-8d34-959e666cf071">
                <Row>
                  <Col sm={2}>
                    <img style={{width: '100%', paddingRight: '10px'}} src={hamid} alt="Hamid Ashouri" />
                  </Col>
                  <Col style={{display: 'flex', alignItems:'center'}}>
                    Hamid Ashouri - President
                  </Col>
                </Row>
              </Link>   
              <Space />      
              <Link to="/user/4c5ac900-e284-11ea-a9a5-23f7e437bac0">
                <Row>
                  <Col sm={2}>
                    <img style={{width: '100%', paddingRight: '10px'}} src={ehsan} alt="Ehsan Gazar" />
                  </Col>
                  <Col style={{display: 'flex', alignItems:'center'}}>
                    Ehsan Gazar - Secretary
                  </Col>
                </Row>
              </Link>         
            </Col>
          </Row>
        </Container>
        <Space />
      </Layout>
    </div>
  )
}

export default BoardMembers
