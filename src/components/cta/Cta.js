import React from 'react';
import './Cta.css';
import {Link} from  'react-router-dom'

function Cta() {
    return (
        <div className="cta__container">
            <div className="cta">
                <div className="cta__image"></div>
                <div className="cta__content">
                    <h2>Buy Swiss Flower Airfreshener</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis faucibus eleifend augue id </p>

                    <div className="cta_btn-container">
                        <Link to = '/'><span className="cta_btn-1" >Buy Swiss products</span></Link>
                        <Link to = '/'><span className="cta_btn-2" >Become a distibutor</span></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cta
