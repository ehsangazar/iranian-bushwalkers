import React from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import Space from '../Space/Space'
import { Container, Row } from 'react-bootstrap'

const LoadingPage = () => {
  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="..." />
        <Space></Space>
        <Container style={{maxWidth: '500px'}}>
          <Row>
            <div style={{
              textAlign: 'center',
              width: '100%',
              minHeight: '200px'
            }}
            >
              Loading
            </div>
          </Row>
        </Container>
      </Layout>
    </div>
  )
}

export default LoadingPage
