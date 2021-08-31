import React from 'react';
import './Gel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';  

import ProductFeatures from '../../components/productFeatures/ProductFeatures';
import ProductHeader from '../../components/productHeader/ProductHeader';
import ProductPhoto from '../../components/productPhoto/ProductPhoto';
import Cta from '../../components/cta/Cta';


import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';

const Productdata = [
    {
        title: 'Tangerine',
        photo: ""
    },
    {
        title: 'Lemon',
        photo: ""
    },
    {
        title: 'Vanilla Regular and Refil',
        photo: ""
    },
    {
        title: 'Floarale Regular and Refil',
        photo: ""
    },
    {
        title: 'Lavenda Regular and Refil',
        photo: ""
    }
]

const gelData ={
    heading:'Swiss Flower Gel Airfreshner.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean. Bibendum et sollicitudin nulla netus mauris blandit ut accumsan. Tortor odio odio ridiculus erat. Convallis scelerisque iaculis cursus velit platea sed in. Magna mus neque sed sed duis vel, ac egestas.',
    classname: 'productheader-gel'
}


function Gel() {

    SwiperCore.use([Navigation]);

    return (
        <motion.div initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}>
          
        <ProductHeader data={gelData}/>
        <ProductFeatures/>
    <div className="product__photos">
        <h2>Multiple Designs, Quality Fragrances</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis faucibus eleifend augue id ac lectus dictum ultrices mi. </p>

        <div className="product__photos-images">
        <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    300: {
                      width: 300,
                      slidesPerView: 1.05,
                      navigation :"false"
                    },
                    // when window width is >= 640px
                    640: {
                      width: 640,
                      slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    748: {
                      width: 748,
                      slidesPerView: 2,
                    },
                    // when window width is >= 1200px
                    1200: {
                      width: 1200,
                      slidesPerView: 4,
                    },
                    1300: {
                      width: 1300,
                      slidesPerView: 4,
                    },
                  }}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                >
                

              

            {Productdata.map((photo, i)=>{
                return  <SwiperSlide><ProductPhoto key={i} title={photo.title} photo={photo.photo}/></SwiperSlide> 

            })}
              </Swiper>
        </div>
    </div>

    <Cta/>
    </motion.div>
    )
}

export default Gel
