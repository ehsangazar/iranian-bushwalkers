import React from 'react'
import Layout from '../Layout/Layout'
import ContentButton from '../ContentButton/ContentButton'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import { Container } from 'react-bootstrap'

const UseFulLinks = () => {
  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="Useful Links" />
        <Container fluid="content">
          <ContentButton
            title="Consumer Affair Victoria"
            description="Model rules for an incorporated association"
            buttonTitle="Download"
            buttonLink="/downloads/Model-rules-for-Iranian-Bushwalkers.pdf"
          />
          <ContentButton
            title="Leaders Form To Report an Event"
            buttonTitle="Download"
            buttonLink="/downloads/IranianBushwalkingEventForm-.pdf"
          />
          <ContentButton
            title="Temproray Form For New Members"
            buttonTitle="Download"
            buttonLink="/downloads/IranianBushwalkingEventForm-.pdf"
          />
          <ContentButton
            title="Participants Emergency Contact and Medical Information Form"
            buttonTitle="Download"
            buttonLink="/downloads/Participants_Emergency_Contact_and_Medical_Information.pdf"
          />
        </Container>
      </Layout>
    </div>
  )
}

export default UseFulLinks
