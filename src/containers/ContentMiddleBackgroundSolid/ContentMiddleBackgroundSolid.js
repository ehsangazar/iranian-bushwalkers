import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContentMiddleBackgroundSolid = ({
  title,
}) => {
  return (
    <section className="content-middle">
      <Container>
        <Row>
          <h2>{title}</h2>
        </Row>
      </Container>
    </section>
  )
}

export default ContentMiddleBackgroundSolid
