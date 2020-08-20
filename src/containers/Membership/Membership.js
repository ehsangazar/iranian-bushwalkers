import React from 'react'
import Layout from '../Layout/Layout'
import PricingPlans from '../PricingPlans/PricingPlans'
import ContentMiddleBackgroundSolid from '../ContentMiddleBackgroundSolid/ContentMiddleBackgroundSolid'

const Membership = () => {
  return (
    <div>
      <Layout>
        <ContentMiddleBackgroundSolid title="Membership" />
        <PricingPlans />
      </Layout>
    </div>
  )
}

export default Membership
