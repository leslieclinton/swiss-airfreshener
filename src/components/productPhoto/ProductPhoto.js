import React from 'react';
import './ProductPhoto.css'

function ProductPhoto({title, photo}) {
    console.log(title)
    return (
             <div className="product__photo-container">
                    <div className="product__photo-img">
                         <img src={photo} alt={title} />
                    </div>
                    <h4>{title}</h4>
            </div>
    )
}

export default ProductPhoto
