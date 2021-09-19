import React from 'react';
import './Gel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';  

import ProductFeatures from '../../components/productFeatures/ProductFeatures';
import ProductHeader from '../../components/productHeader/ProductHeader';
import ProductPhoto from '../../components/productPhoto/ProductPhoto';
import Cta from '../../components/cta/Cta';

import flowerFresh from '../../assets/Images/gel-flower-fresh-1.jpg'
import campestra from '../../assets/Images/gel-campestra-1.jpg'
import lavenda from '../../assets/Images/gel-lavenda-1.jpg'
import tropicana from '../../assets/Images/gel-tropicana-1.jpg'
import vanilla from '../../assets/Images/gel-vanilla-1.jpg'
import lemon from '../../assets/Images/gel-lemon-1.jpg'
import multiFruity from '../../assets/Images/gel-multi-fruity-1.jpg'
import sweetFlorale from '../../assets/Images/gel-sweet-florale-1.jpg'


import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';

const Productdata = [
    {
        title: 'Flower Fresh',
        photo: flowerFresh
    },
    {
        title: 'Campestra',
        photo: campestra
    },
    {
        title: 'Lavenda',
        photo: lavenda
    },
    {
        title: 'Tropicana',
        photo: tropicana
    },
    {
        title: 'Vanilla',
        photo: vanilla
    },
    {
        title: 'Lemon',
        photo: lemon
    },
    {
        title: 'Multi fruity',
        photo: multiFruity
    },
    {
        title: 'Sweet Florale',
        photo: sweetFlorale
    },
]

const gelData ={
    heading:'Swiss Flower Gel Airfreshner.',
    description: 'Swiss Flower Gel is known for dispensing sweet aromas in the air. It is carefully formulated with essential oils and other quality ingredients which helps in keeping your sorroundings smelling fresh and clean. It comes in 8 quality fragrances, Lemon, Campestra, Tropicana, Sweet Florale, Flower Fresh, Vanilla and Multi-fruity ',
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
