import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';  

import ProductFeatures from '../../components/productFeatures/ProductFeatures';
import ProductHeader from '../../components/productHeader/ProductHeader';
import './Regular.css';
import ProductPhoto from '../../components/productPhoto/ProductPhoto';

import Campestra from '../../assets/Images/regular-campestra.jpg';
import Fruity from '../../assets/Images/regular-fruity.jpg';
import Vanilla from '../../assets/Images/regular-vanilla.jpg';
import Florale from '../../assets/Images/regular-florale.jpg';
import Lavenda from '../../assets/Images/regular-lavenda.jpg';

import Cta from '../../components/cta/Cta';


const Productdata = [
    {
        title: 'Campestra Regular and Refil',
        photo: Campestra
    },
    {
        title: 'Multi-Fruity Regular and Refil',
        photo: Fruity
    },
    {
        title: 'Vanilla Regular and Refil',
        photo: Vanilla
    },
    {
        title: 'Floarale Regular and Refil',
        photo: Florale
    },
    {
        title: 'Lavenda Regular and Refil',
        photo: Lavenda
    }
]

const regularData ={
    heading:'Swiss Refil & Regular Airfreshner.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque semper luctus euismod tellus. Massa nunc, in ridiculus aenean. Bibendum et sollicitudin nulla netus mauris blandit ut accumsan. Tortor odio odio ridiculus erat. Convallis scelerisque iaculis cursus velit platea sed in. Magna mus neque sed sed duis vel, ac egestas.',
    classname: 'productheader-regular'
}


function Regular() {
    SwiperCore.use([Navigation]);

    return (
        <div>
            <ProductHeader data={regularData}/>
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
        </div>
    )
}

export default Regular
