import React from 'react';
import ProductFeatures from '../../components/productFeatures/ProductFeatures';
import ProductHeader from '../../components/productHeader/ProductHeader';
import './Card.css';

const cardData ={
    heading:'Swiss Card Airfreshner.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean. Bibendum et sollicitudin nulla netus mauris blandit ut accumsan. Tortor odio odio ridiculus erat. Convallis scelerisque iaculis cursus velit platea sed in. Magna mus neque sed sed duis vel, ac egestas.',
    classname: 'productheader-card'
}


function Card() {
    return (
        <div>
            <ProductHeader data={cardData}/>
            <ProductFeatures/>
        </div>
    )
}

export default Card
