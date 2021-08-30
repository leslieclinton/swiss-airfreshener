import React from 'react'
import AboutSnippet from '../../components/aboutSnippet/AboutSnippet'
import Header from '../../components/headers/Header'
import ProductPreview from '../../components/productPreview/ProductPreview'
import WhyUs from '../../components/whyus/WhyUs'
import Cta from '../../components/cta/Cta';


function HomePage() {
    return (
        <div>
            <Header/>
            <WhyUs/>
            <ProductPreview/>
            <AboutSnippet/>
            <Cta/>
        </div>
    )
}

export default HomePage
