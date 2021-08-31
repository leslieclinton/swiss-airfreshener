import React from 'react'
import AboutSnippet from '../../components/aboutSnippet/AboutSnippet'
import Header from '../../components/headers/Header'
import ProductPreview from '../../components/productPreview/ProductPreview'
import WhyUs from '../../components/whyus/WhyUs'
import Cta from '../../components/cta/Cta';

import {motion} from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';





function HomePage() {
    return (
        <motion.div   initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}>
            <Header/>
            <WhyUs/>
            <ProductPreview/>
            <AboutSnippet/>
            <Cta/>
        </motion.div>
    )
}

export default HomePage
