import React from 'react'
import Layout from '../Layout/Layout'
import AboutSection from '../AboutSection/AboutSection'
import Banner from '../Banner/Banner'

const Home = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <AboutSection />
      </Layout>
    </div>
  )
}

export default Home
