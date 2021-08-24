import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Topbar from './components/topBar/Topbar';

function App() {
  return (
    
    <Router>
      <Topbar/>
      <Navbar/>

      <Switch>

      

      </Switch>
    </Router>

  )
}

export default App
