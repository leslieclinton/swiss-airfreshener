import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';  

import './ProductPreview.css';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/navigation/pagination.scss';
// import 'swiper/components/navigation/scrollbar.scss';




function ProductPreview() {
    SwiperCore.use([Navigation]);

    return (
        <div className="productpreview">
            <h2>Swiss flower products</h2>
            <p>We offer a range of Air Fresheners, and a wide choice of different  fragrances specifically aimed at freshening your world.</p>


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
            spaceBetween={10}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
            >
            <SwiperSlide>
                <Link to='/liquid'>
                    <div className="productpreview-images productpreview-images-1">
                        <div className="productpreview-products">
                            <span>Liquid</span>
                        </div>
                    </div>
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link to='/regular'>
                    <div className="productpreview-images productpreview-images-2">
                        <div className="productpreview-products">
                            <span>Regular & Refil</span>
                        </div>
                    </div>
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link to='/card'>
                    <div className="productpreview-images productpreview-images-3">
                        <div className="productpreview-products">
                            <span> Card</span>
                        </div>
                    </div>
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link to='/scentpad'>
                    <div className="productpreview-images productpreview-images-4">
                        <div className="productpreview-products">
                            <span>Scent Pad</span>
                        </div>
                    </div>
                </Link> 
            </SwiperSlide>
            <SwiperSlide>
                <Link to='/gel'>
                    <div className="productpreview-images productpreview-images-5">
                        <div className="productpreview-products">
                            <span>Gel</span>
                        </div>
                    </div>
                </Link> 
            </SwiperSlide>
            
            </Swiper>

        </div>
    )
}

export default ProductPreview
