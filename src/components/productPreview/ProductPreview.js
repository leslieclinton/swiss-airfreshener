import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import './ProductPreview.css';

import 'swiper/swiper.scss'




function ProductPreview() {
    return (

        <div className="productpreview">
            <h2>Swiss flower products</h2>
            <p>We offer a range of Air Fresheners, and a wide choice of different  fragrances specifically aimed at freshening your world.</p>


            <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <Link to='/'>
                    <div className="productpreview-images productpreview-images-1">
                        <div className="productpreview-products">
                            <span>Liquid</span>
                        </div>
                    </div>
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link to='/'>
                    <div className="productpreview-images productpreview-images-1">
                        <div className="productpreview-products">
                            <span>Liquid</span>
                        </div>
                    </div>
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link to='/'>
                    <div className="productpreview-images productpreview-images-1">
                        <div className="productpreview-products">
                            <span>Liquid</span>
                        </div>
                    </div>
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link to='/'>
                    <div className="productpreview-images productpreview-images-1">
                        <div className="productpreview-products">
                            <span>Liquid</span>
                        </div>
                    </div>
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link to='/'>
                    <div className="productpreview-images productpreview-images-1">
                        <div className="productpreview-products">
                            <span>Liquid</span>
                        </div>
                    </div>
                </Link> 
            </SwiperSlide>
            
            </Swiper>

        </div>
    )
}

export default ProductPreview
