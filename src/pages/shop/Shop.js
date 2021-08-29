import React from 'react';
import './Shop.css';

import {Link} from 'react-router-dom';

import Regular from '../../assets/Images/regular-shop.jpg';
import Card from '../../assets/Images/card-shop.png';
import Scentpad from '../../assets/Images/scentpad-shop.jpg';
// import regular from '../../assets/Images/card-shop.jpg';

const productData =[
    {
        title: "Buy Swiss Flower Liquid Airfreshener",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean",
        qty: "Solid in packs",
        url: "konga.com",
        photo: ""
    },
    {
        title: "Buy Swiss Flower Regualr & Refil Airfreshener",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean",
        qty: "Solid in packs",
        url: "konga.com",
        photo: Regular
    },
    {
        title: "Buy Swiss Flower Card Airfreshener",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean",
        qty: "Solid in packs",
        url: "konga.com",
        photo: Card
    },
    {
        title: "Buy Swiss Flower Scent pad Airfreshener",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean",
        qty: "Solid in packs",
        url: "konga.com",
        photo: Scentpad
    },
    {
        title: "Buy Swiss Flower Gel Airfreshener",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean",
        qty: "Solid in packs",
        url: "konga.com",
        photo: ""
    },
]



function Shop() {
    return (
        <>
            <div className="shop">
                <h1>Buy Swiss Flower Airfrehners</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean.</p>
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
                    <Link to={product.url}><div className="product__btn">Buy products</div></Link>
                </div>
                    )
                })}
                
                

            </div>
        </>
    )
}

export default Shop
