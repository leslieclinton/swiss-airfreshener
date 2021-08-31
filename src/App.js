import React from 'react';
import { Switch, Route, useLocation} from 'react-router-dom';
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


import {AnimatePresence} from 'framer-motion'
import NotFound from './pages/notFound/NotFound';




function App() {
  const location = useLocation()
  return (
    
      <ScrollToTop>
        <Topbar/>
        <Navbar/>
        <AnimatePresence>
          <Switch location={location} key={location.key}>
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
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </AnimatePresence>
        <Footer/>
      </ScrollToTop>

  )
}

export default App
