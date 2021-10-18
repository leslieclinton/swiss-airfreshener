import React from 'react';
import './Shop.css';

import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';


import Regular from '../../assets/Images/regular-shop.jpg';
import Dangler from '../../assets/Images/card-shop.png';
import Scentpad from '../../assets/Images/scentpad-shop.jpg';
import Liquid from '../../assets/Images/liquid-product-shop.jpg';
import Gel from '../../assets/Images/gel-shop.jpg';

import Cta from '../../components/cta/Cta';

const productData =[
    {
        title: "Swiss Flower Liquid Air freshener",
        desc: "Swiss Flower Liquid Air Fresheners comes in sweet distinct fragrances that make your surroundings feel more inviting.",
        qty: "Sold in packs",
        url: "https://www.konga.com/search?search=STOVA%20INDUSTRIES%20LTD",
        photo: Liquid
    },
    {
        title: "Swiss Flower Regular & Refil Air freshener",
        desc: "Swiss Flower regular and refil air freshener comes in multiple frangrances, designed to deodorize your environment.",
        qty: "Solid in packs",
        url: "https://www.konga.com/search?search=STOVA%20INDUSTRIES%20LTD",
        photo: Regular
    },
    {
        title: "Swiss Flower Dangler Air freshener",
        desc: "Swiss Flower Branded Car Dangling Air Freshener comes in superior quality fragrance and amazing colours.",
        qty: "Sold in packs",
        url: "https://www.konga.com/search?search=STOVA%20INDUSTRIES%20LTD",
        photo: Dangler
    },
    {
        title: "Swiss Flower Scent pad Air freshener",
        desc: "A reliable odour repellent. It comes in variety of fragrance keeping your environment fresh with long lasting fragrances.",
        qty: "Sold in packs",
        url: "https://www.konga.com/search?search=STOVA%20INDUSTRIES%20LTD",
        photo: Scentpad
    },
    {
        title: "Swiss Flower Gel Air freshener",
        desc: "Swiss Flower Gel is known for dispensing sweet aromas in the air. It helps in keeping your sorroundings smelling fresh.",
        qty: "Sold in packs",
        url: "https://www.konga.com/search?search=STOVA%20INDUSTRIES%20LTD",
        photo: Gel
    },
]



function Shop() {
    return (
        <motion.div initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}>
            <div className="shop">
                <h1>Buy Swiss Flower Airfreheners</h1>
                <p>Add more freshness to your home, cars, workspace, etc. Shop our irresistible Swiss Flower aromatic scents.</p>
            </div>

            <div className="products__container">

                {productData.map((product, i)=>{
                    return(
            <div className="product">
                    <div className="product__image">
                        <img src={product.photo} alt={product.title} />
                    </div>
                    <div className="product__texts">
                        <h2>{product.title}</h2>
                        <p>{product.desc}</p>
                        <h4>{product.qty}</h4>
                    </div>
                    <a href={product.url} target="_blank" rel="noreferrer"><div className="product__btn">Buy products</div></a>
                </div>
                    )
                })}
                
                

            </div>
            <Cta/>

        </motion.div>
    )
}

export default Shop
