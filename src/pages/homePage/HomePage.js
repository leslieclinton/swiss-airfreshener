import React from 'react'
import AboutSnippet from '../../components/aboutSnippet/AboutSnippet'
import Cta from '../../components/cta/Cta'
import Header from '../../components/headers/Header'
import ProductPreview from '../../components/productPreview/ProductPreview'
import WhyUs from '../../components/whyus/WhyUs'

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
