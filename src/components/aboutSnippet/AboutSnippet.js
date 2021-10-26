import React from 'react';
import {Link} from 'react-router-dom'

import './AboutSnippet.css'

function AboutSnippet() {


    return (
        <div className="aboutsnippet__container">
            <div className="aboutsnippet">

                <div className="aboutsnippet__content">
                    <h2>About Swiss Flower Air freshener</h2>
                    <p>We are on a mission to deliver pleasant and irresistible aromatic scents. Our collection consists of carefully formulated fragrances aimed at making your home, offices, workspace, cars, etc. maintain a good atmospheric environment.</p>
                    <Link to='/about'><span>See more</span></Link>
                </div>

                <div className="aboutsnippet__image ">
                    <div  className="aboutsnippet__animate">
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}

export default AboutSnippet;
