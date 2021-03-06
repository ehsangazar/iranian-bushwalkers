import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import Home from './containers/Home/Home'
import SingleEvent from './containers/SingleEvent/SingleEvent'
import About from './containers/About/About'
import BoardMembers from './containers/BoardMembers/BoardMembers'
import Membership from './containers/Membership/Membership'
import Members from './containers/Members/Members'
import Events from './containers/Events/Events'
import Transactions from './containers/Transactions/Transactions'
import Leaders from './containers/Leaders/Leaders'
import GradingSystemGuidline from './containers/GradingSystemGuidline/GradingSystemGuidline'
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy'
import UseFulLinks from './containers/UseFulLinks/UseFulLinks'
import CodeOfConduct from './containers/CodeOfConduct/CodeOfConduct'
import SingleUser from './containers/SingleUser/SingleUser'
import Contact from './containers/Contact/Contact'
import MyApp from './contexts/MyApp'


export default function App() {
  const [userData, setUserData] = useState({})
  const [modalToShow, setModalToShow] = useState(null)

  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <MyApp.Provider
          value={{
            user: {
              userData,
              setUserData,
            },
            modal: {
              modalToShow,
              setModalToShow,
            },
          }}
        >
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
              <Route path="/membership">
                <Membership />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/board-members">
                <BoardMembers />
              </Route>
              <Route path="/members">
                <Members />
              </Route>
              <Route path="/leaders">
                <Leaders />
              </Route>
              <Route path="/user/:id">
                <SingleUser />
              </Route>
              <Route path="/event/:id">
                <SingleEvent />
              </Route>
              <Route path="/events">
                <Events />
              </Route>
              <Route path="/transactions">
                <Transactions />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </MyApp.Provider>
      </QueryParamProvider>
    </Router>
  )
}
