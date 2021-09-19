import React from 'react';
import './Liquid.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';  

import ProductFeatures from '../../components/productFeatures/ProductFeatures';
import ProductHeader from '../../components/productHeader/ProductHeader';
import ProductPhoto from '../../components/productPhoto/ProductPhoto';

import Tangerine from '../../assets/Images/liquid-tangerine.jpg';
import CoolFresh from '../../assets/Images/liquid-coolfresh.jpg';
import SweetPine from '../../assets/Images/liquid-sweetpine.jpg';
import FreshAir from '../../assets/Images/liquid-freshair.jpg';
import SpringFlower from '../../assets/Images/liquid-springflower.jpg';
import GardebFlower from '../../assets/Images/liquid-gardenflower.jpg';
import SummerScent from '../../assets/Images/liquid-summercent.jpg';

import Cta from '../../components/cta/Cta';

import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';



const Productdata = [
    {
        title: 'Tangerine',
        photo: Tangerine
    },
    {
        title: 'Cool Fresh',
        photo: CoolFresh
    },
    {
      title: 'Sweet Pine',
      photo: SweetPine
    },
    {
        title: 'Fresh Air',
        photo: FreshAir
    },
    {
        title: 'Spring Flower',
        photo: SpringFlower
    },
    {
        title: 'Garden Flower',
        photo: GardebFlower
    },
    {
        title: 'Summer Scent',
        photo: SummerScent
    }
]

const liquidData ={
    heading:'Swiss Flower Liquid Airfreshner.',
    description: 'Swiss Flower Liquid Air comes in sweet fragrances that  make your surroundings feel more inviting. Swiss Flower  Liquid Air Fresheners are suitable for Hotels, Hospitals, Banks, Airplanes,  Automobiles, Ships and other habitable places. It comes in various fragrances, Tangerine, Cool Fresh, Summer Scent, Sweet Pine,  Spring Flower, Fresh Air and Garden Flower. ',
    classname: 'productheader-liquid'
}



function Liquid() {

    SwiperCore.use([Navigation]);

    return (
        <motion.div initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}>
        <ProductHeader data={liquidData}/>
        <ProductFeatures/>
    <div className="product__photos">
        <h2>Multiple Fragrances, in 500ml & 250ml.</h2>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis faucibus eleifend augue id ac lectus dictum ultrices mi. </p> */}

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

export default Liquid
