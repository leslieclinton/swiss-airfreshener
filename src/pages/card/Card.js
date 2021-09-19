import React from 'react';
import ProductFeatures from '../../components/productFeatures/ProductFeatures';
import ProductHeader from '../../components/productHeader/ProductHeader';
import './Card.css';
import BrandedOrange from '../../assets/Images/Branded-orange.png';
import BrandedGreen from '../../assets/Images/Branded-green.png';
import BrandedOrangeRed from '../../assets/Images/Branded-orange-red.png';
import BrandedGrey from '../../assets/Images/Branded-grey.png';
import BrandedPink from '../../assets/Images/Branded-pink.png';
import BrandedRed from '../../assets/Images/Branded-red.png';
import Brandedlemon from '../../assets/Images/Branded-lemon.png';


import Cta from '../../components/cta/Cta';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';



const cardData ={
    heading:'Swiss Car Dangler Airfreshner.',
    description: 'Swiss Flower Branded Car Dangling Air Freshener comes in superior quality fragrance and amazing colours. Each is produced from natural extracts of essential oils. Renowned as “The King of Car freshness”, keeps your car fresh every minute and moment. Swiss Flower Branded Car Air Fresheners is a famous household name across national borders.',
    classname: 'productheader-card'
}




const Productdata = [BrandedOrange, BrandedGreen, BrandedOrangeRed, BrandedGrey, BrandedPink, Brandedlemon, BrandedRed, BrandedPink]

function Card() {


    return (
        <motion.div initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}>
            <ProductHeader data={cardData}/>
            <ProductFeatures/>

            <div className="card__jumbotron-container">
                <div className="card__jumbotron">
                    <h2>Your Car<br/>Companion</h2>
                    <p>Most suitable for cars.</p>
                </div>
            </div>

            <div className="product__photos">
            <h2>Multiple Designs, Quality Fragrances</h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis faucibus eleifend augue id ac lectus dictum ultrices mi. </p> */}

            <div className="card__photos-images">
            {Productdata.map((photo, i)=>{
                 return <div className="card__photo" key={i}> <img src={photo} alt="Swiss Branded images" /></div>

            })}
                   
            </div>
        </div>

        <Cta/>
        </motion.div>
    )
}

export default Card

