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
        </Switch>
      <Cta/>
      <Footer/>
      </ScrollToTop>
    </Router>

  )
}

export default App
