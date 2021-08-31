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
import Shop from './pages/shop/Shop';

import ScrollToTop from 'react-router-scroll-top'
import About from './pages/about/About';
import Liquid from './pages/liquid/Liquid';
import Gel from './pages/gel/Gel';
import Distributor from './pages/distributor/Distributor';
import Contact from './pages/contact/Contact';

// import "swiper/css/bundle";


function App() {
  return (
    
    <Router>
      <ScrollToTop>
      <Topbar/>
      <Navbar/>
        <Switch>
          <Route exact path='/'  component={HomePage}></Route>
          <Route exact path='/regular'  component={Regular}></Route>
          <Route exact path='/scentpad'  component={ScentPad}></Route>
          <Route exact path='/card'  component={Card}></Route>
          <Route exact path='/shop'  component={Shop}></Route>
          <Route exact path='/about'  component={About}></Route>
          <Route exact path='/liquid' component={Liquid}></Route>
          <Route exact path='/gel' component={Gel}></Route>
          <Route exact path='/distributor' component={Distributor}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      <Footer/>
      </ScrollToTop>
    </Router>

  )
}

export default App
