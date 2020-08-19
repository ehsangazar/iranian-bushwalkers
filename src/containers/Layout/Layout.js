import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div id="wrapperParallax" className="wrapper clearfix">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
