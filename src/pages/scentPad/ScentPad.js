import React from 'react';
import ProductHeader from '../../components/productHeader/ProductHeader';
import './ScentPad.css';
import ProductFeatures from '../../components/productFeatures/ProductFeatures'
// import ProductPhoto from '../../components/productPhoto/ProductPhoto';

import Cta from '../../components/cta/Cta';

import ScentPadMarine from '../../assets/Images/Scentpad-marine.jpg'
import ScentPadFreshDew from '../../assets/Images/Scentpad-fresh-dew.jpg'
import ScentPadOrient from '../../assets/Images/Scentpad-orient.jpg'
import ScentPadBlossom from '../../assets/Images/Scentpad-blossom.jpg'

const ScentPadData ={
    heading:'Swiss Scent Pad Airfreshner.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean. Bibendum et sollicitudin nulla netus mauris blandit ut accumsan. Tortor odio odio ridiculus erat. Convallis scelerisque iaculis cursus velit platea sed in. Magna mus neque sed sed duis vel, ac egestas.',
    classname: 'productheader-secntpad'
}

const Productdata = [ScentPadMarine, ScentPadFreshDew, ScentPadOrient, ScentPadBlossom];


function ScentPad() {
    return (
        <>
            <ProductHeader data={ScentPadData}/>
            <ProductFeatures/>
            <div className="product__photos">
            <h2>Multiple Designs, Quality Fragrances</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis faucibus eleifend augue id ac lectus dictum ultrices mi. </p>

            <div className="scent__photos-images">
            {Productdata.map((photo, i)=>{
                 return <div className="card__photo" key={i}> <img src={photo} alt="Swiss Branded images" /></div>

            })}
                   
            </div>
        </div>
        <Cta/>
        </>
        
    )
}

export default ScentPad
