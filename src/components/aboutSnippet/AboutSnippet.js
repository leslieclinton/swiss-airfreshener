import React from 'react';
import {Link} from 'react-router-dom'

import './AboutSnippet.css'

function AboutSnippet() {


    return (
        <div className="aboutsnippet__container">
            <div className="aboutsnippet">

                <div className="aboutsnippet__content">
                    <h2>About Swiss Flower Airfreshener</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis faucibus eleifend augue id ac lectus dictum ultrices mi. Nunc tincidunt nulla tellus justo tempor nisl. Elit arcu id pulvinar lectus habitant tempor tellus, habitasse. Elementum nulla aliquet a, mauris, luctus sit leo.</p>
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
