import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';

import Navbar from './components/Navbar/Navbar';
import Topbar from './components/topBar/Topbar';
import HomePage from './pages/homePage/HomePage';

// import "swiper/css/bundle";


function App() {
  return (
    
    <Router>
      <Topbar/>
      <Navbar/>
      <Switch>
        <Route exact path='/'  component={HomePage}></Route>

      

      </Switch>
      <Footer/>
    </Router>

  )
}

export default App
