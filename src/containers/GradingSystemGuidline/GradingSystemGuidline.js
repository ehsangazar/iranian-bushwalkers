import React from 'react'
import Layout from '../Layout/Layout'
import SinglePostSection from '../SinglePostSection/SinglePostSection'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import gradesImage from './grades.jpg'

const GradingSystemGuidline = () => {
  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="Grading System Guideline" />
        <SinglePostSection
          title="GradingSystemGuidline"
          descirption={`
            This is an image provided to us from Bushwalking Victoria that 
            shows the grading in bushwalking in Australia.
            <br />
            <img src=${gradesImage} />
          `}
        />
      </Layout>
    </div>
  )
}

export default GradingSystemGuidline
