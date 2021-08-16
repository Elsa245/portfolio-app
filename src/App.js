import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          {/* <Home /> */}
          <Route exact path='/' component={Home} />
          <Route path='/education' component={Education} />
          <Route path='/experience' component={Experience} />
        </Switch>
      </BrowserRouter>
      
    </>
  )
}

export default App
