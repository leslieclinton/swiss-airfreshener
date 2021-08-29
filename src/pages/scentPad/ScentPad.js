import React from 'react';
import ProductHeader from '../../components/productHeader/ProductHeader';
import './ScentPad.css';
import ProductFeatures from '../../components/productFeatures/ProductFeatures'

const ScentPadData ={
    heading:'Swiss Scent Pad Airfreshner.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean. Bibendum et sollicitudin nulla netus mauris blandit ut accumsan. Tortor odio odio ridiculus erat. Convallis scelerisque iaculis cursus velit platea sed in. Magna mus neque sed sed duis vel, ac egestas.',
    classname: 'productheader-secntpad'
}


function ScentPad() {
    return (
        <div>
            <ProductHeader data={ScentPadData}/>
            <ProductFeatures/>
        </div>
    )
}

export default ScentPad
