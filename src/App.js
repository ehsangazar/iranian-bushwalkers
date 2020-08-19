import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import GradingSystemGuidline from './containers/GradingSystemGuidline/GradingSystemGuidline'
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy'
import UseFulLinks from './containers/UseFulLinks/UseFulLinks'
import CodeOfConduct from './containers/CodeOfConduct/CodeOfConduct'
import Contact from './containers/Contact/Contact'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/code-of-conduct">
            <CodeOfConduct />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/useful-links">
            <UseFulLinks />
          </Route>
          <Route path="/grading-system-guideline">
            <GradingSystemGuidline />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
