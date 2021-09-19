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
        title: "Buy Swiss Flower Liquid Airfreshener",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean",
        qty: "Sold in packs",
        url: "https://www.konga.com/search?search=STOVA%20INDUSTRIES%20LTD",
        photo: Liquid
    },
    {
        title: "Buy Swiss Flower Regular & Refil Airfreshener",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean",
        qty: "Solid in packs",
        url: "https://www.konga.com/search?search=STOVA%20INDUSTRIES%20LTD",
        photo: Regular
    },
    {
        title: "Buy Swiss Flower Dangler Airfreshener",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean",
        qty: "Sold in packs",
        url: "https://www.konga.com/search?search=STOVA%20INDUSTRIES%20LTD",
        photo: Dangler
    },
    {
        title: "Buy Swiss Flower Scent pad Airfreshener",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean",
        qty: "Sold in packs",
        url: "https://www.konga.com/search?search=STOVA%20INDUSTRIES%20LTD",
        photo: Scentpad
    },
    {
        title: "Buy Swiss Flower Gel Airfreshener",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean",
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
                <h1>Buy Swiss Flower Airfrehners</h1>
                <p>Add more fresheness to your home, cars, workspace etc. Shop our irresistible Swiss Flower aromatic scents.</p>
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
