import React from 'react';
import {Link} from 'react-router-dom'
import './Topbar.css'

function Topbar() {
    return (
        <div className="topbar__container">
            <Link to='/distributor'> 
                <div className="topbar__link">
                    <span >BECOME A DISTRIBUTOR</span>
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.142822 8.96645L3.71425 5.39502L0.142822 1.82359L0.857108 0.39502L5.85711 5.39502L0.857108 10.395L0.142822 8.96645Z" fill="white"/></svg>
                </div>
            </Link> 
      
        </div>
    )
}

export default Topbar
