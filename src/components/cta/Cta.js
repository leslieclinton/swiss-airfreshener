import React from 'react';
import './Cta.css';
import {Link} from  'react-router-dom'

function Cta() {
    return (
        <div className="cta__container">
            <div className="cta">
                <div className="cta__image"></div>
                <div className="cta__content">
                    <h2>Buy Swiss Flower Air freshener</h2>
                    <p>Our products are loved and used by millions of homes, become a part of our story today.</p>

                    <div className="cta_btn-container">
                        <Link to = '/shop'><span className="cta_btn-1" >Buy Swiss Flower products</span></Link>
                        <Link to = '/distributor'><span className="cta_btn-2" >Become a distibutor</span></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cta
