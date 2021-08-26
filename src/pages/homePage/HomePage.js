import React from 'react'
import Header from '../../components/headers/Header'
import ProductPreview from '../../components/productPreview/ProductPreview'
import WhyUs from '../../components/whyus/WhyUs'

function HomePage() {
    return (
        <div>
            <Header/>
            <WhyUs/>
            <ProductPreview/>
        </div>
    )
}

export default HomePage
