import React from 'react';
import {Link} from 'react-router-dom'
import './ProductHeader.css'

function ProductHeader({data}) {

    const {heading, description, classname} = data;

    return (
        <div className={`productheader ${classname} `}>
            <div className="productheader__content ">
               <h2>{heading}</h2>
                <p>{description}</p>
                <Link to='/'><span>Buy Swiss Flower Products </span></Link>
            </div>
        </div>
    )
}

export default ProductHeader
