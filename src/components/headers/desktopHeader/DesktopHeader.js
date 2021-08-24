import React from 'react'
import './DesktopHeader.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";


function DesktopHeader() {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        cssEase: "linear"
      };

    
    return (
        <>
        <SlickSlider {...settings}>
            <div className="desktop__header d__slide-1">
                <div className="d__header-content">
                    <h3>Swiss Flower</h3>
                    <h1>Regular & Refil</h1>
                    <p>Simple ingredients with stellar results.  in-house garment care line is tried.Simple ingredients with stellar </p>

                    <div className="d__header-btn">
                        Explore
                    </div>
                </div>
            </div>
            <div className="desktop__header d__slide-2">
                <div className="d__header-content">
                    <h3>Swiss Flower</h3>
                    <h1>Scent Pad</h1>
                    <p>Simple ingredients with stellar results.  in-house garment care line is tried.Simple ingredients with stellar </p>

                    <div className="d__header-btn">
                        Explore
                    </div>
                </div>
            </div>
            </SlickSlider>
        </>

    )
}

export default DesktopHeader
