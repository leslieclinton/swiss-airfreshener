import React from 'react';
import './WhyUs.css';

// import { useInView } from 'react-intersection-observer';
// import {useAnimation, motion} from 'framer-motion'

function WhyUs() {

    // const {ref, inView} = useInView({threshold:0.5});
    // const animation = useAnimation()

    // useEffect(()=>{
    //     console.log(inView)
    //     if(inView){
    //         animation.start({
    //             y: 0,
    //             transition:{ duration: .5, type:'tween'}
    //         })
    //     }

    //     if(!inView){
    //         animation.start({
    //             y: 100
    //         })
    //     }
    // }, [animation, inView])


    return (
        <div  className="whyus__container">

            <div className="whyus__card whyus__card-1">
                <div className="whyus__card-icon">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0437 3.26276C9.46195 3.26276 3.2937 9.43101 3.2937 17.0128C3.2937 24.5945 9.46195 30.7628 17.0437 30.7628C24.6255 30.7628 30.7937 24.5945 30.7937 17.0128C30.7937 9.43101 24.6255 3.26276 17.0437 3.26276ZM17.0437 28.0128C10.9786 28.0128 6.0437 23.0779 6.0437 17.0128C6.0437 10.9476 10.9786 6.01276 17.0437 6.01276C23.1088 6.01276 28.0437 10.9476 28.0437 17.0128C28.0437 23.0779 23.1088 28.0128 17.0437 28.0128Z" fill="black"/>
                        <path d="M18.4187 10.1378H15.6687V17.582L20.1966 22.1099L22.1408 20.1656L18.4187 16.4435V10.1378Z" fill="black"/>
                    </svg>
                </div>
                <h3>Long lasting</h3>
                <p>Well manufactured with the very best of ingredients to have a longer lasting life span.</p>
            </div>
            <div className="whyus__card whyus__card-2">
                <div className="whyus__card-icon">
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.375 26.8878C19.375 26.8878 11.25 27.5128 6.875 22.5128C2.5 17.5128 2.5 2.51276 2.5 2.51276C2.5 2.51276 17.5 1.88776 22.5 5.63776C27.5 9.38776 26.25 20.0128 26.25 20.0128" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M27.5 27.5128C27.5 27.5128 20.5125 22.2321 16.25 17.5128C11.9875 12.7928 10 8.13776 10 8.13776" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.25 17.5128L16.875 9.38776" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.25 17.5128L10 16.8878" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>
                <h3>Quality fragrance</h3>
                <p>Swiss flower airfresheners are well refined to excellence, meeting all standards.</p>
            </div>
            <div className="whyus__card whyus__card-3">
                <div className="whyus__card-icon">
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.0852 18.264V22.8354C29.0852 24.8164 24.3096 27.4068 18.4186 27.4068C12.5275 27.4068 7.75189 24.8164 7.75189 22.8354V19.0259" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.19989 19.4206C9.51799 21.1699 13.5942 22.811 18.4186 22.811C24.3096 22.811 29.0852 20.3638 29.0852 18.2609C29.0852 17.08 27.5812 15.7863 25.2208 14.8781" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M24.5138 10.645V15.2164C24.5138 17.1973 19.7382 19.7878 13.8471 19.7878C7.9561 19.7878 3.18048 17.1973 3.18048 15.2164V10.645" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.8471 15.192C19.7382 15.192 24.5138 12.7448 24.5138 10.6419C24.5138 8.53752 19.7382 6.07352 13.8471 6.07352C7.9561 6.07352 3.18048 8.53752 3.18048 10.6419C3.18048 12.7448 7.9561 15.192 13.8471 15.192Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>
                <h3>Affordable price</h3>
                <p>Save more. A competitive pricing designed to meet all demand and budgets.</p>
            </div>

        </div>
    )
}

export default WhyUs
