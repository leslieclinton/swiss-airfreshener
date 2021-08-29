import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cta from './components/cta/Cta';
import Footer from './components/footer/Footer';

import Navbar from './components/Navbar/Navbar';
import Topbar from './components/topBar/Topbar';
import Card from './pages/card/Card';
import HomePage from './pages/homePage/HomePage';
import Regular from './pages/regular/Regular';
import ScentPad from './pages/scentPad/ScentPad';

// import "swiper/css/bundle";


function App() {
  return (
    
    <Router>
      <Topbar/>
      <Navbar/>
      <Switch>
        <Route exact path='/'  component={HomePage}></Route>
        <Route exact path='/regular'  component={Regular}></Route>
        <Route exact path='/scentpad'  component={ScentPad}></Route>
        <Route exact path='/card'  component={Card}></Route>

      

      </Switch>
      <Cta/>
      <Footer/>
    </Router>

  )
}

export default App
