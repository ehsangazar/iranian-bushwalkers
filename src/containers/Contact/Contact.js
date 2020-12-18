import React from 'react'
import Layout from '../Layout/Layout'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'
import SinglePostSection from '../SinglePostSection/SinglePostSection'

const Contact = () => {
  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="Contact" />
        <SinglePostSection
          title="Contact"
          descirption={`
            <div>
              <p>
                If you want to contact our board members, please end an email to secretary@ib.org.au
              </p>
            </div>
          `}
        />
      </Layout>
    </div>
  )
}

export default Contact
