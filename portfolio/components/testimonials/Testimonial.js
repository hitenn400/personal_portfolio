import './Testimonial.css';
import AVTR1 from '../../../assets/avatar1.jpg';
import AVTR2 from '../../../assets/avatar2.jpg';
import AVTR3 from '../../../assets/avatar3.jpg';
import AVTR4 from '../../../assets/avatar4.jpg';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const Testimonial=()=>{
    return(
        <>
            <section id='testimonial'>
                <h5>Review From Clients</h5>
                <h2>Testimonials</h2>
                <div className='container testimonial_container'>
                    
                    <Swiper navigation={true} modules={[Navigation]} className="testimoniall">
                        <SwiperSlide className='client_avatar'>
                        <img src={AVTR1} alt="Avatar1"></img>
                        <h5 className='client_name'>Ernest Achiever</h5>
                        <small className='client_review'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                         in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </small>
                        </SwiperSlide>
                        <SwiperSlide className='client_avatar'>
                        <img src={AVTR1} alt="Avatar1"></img>
                        <h5 className='client_name'>Ernest Achiever</h5>
                        <small className='client_review'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                         in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </small>
                        </SwiperSlide>
                        <SwiperSlide className='client_avatar'>
                        <img src={AVTR1} alt="Avatar1"></img>
                        <h5 className='client_name'>Ernest Achiever</h5>
                        <small className='client_review'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                         in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </small>
                        </SwiperSlide>
                        <SwiperSlide className='client_avatar'>
                        <img src={AVTR1} alt="Avatar1"></img>
                        <h5 className='client_name'>Ernest Achiever</h5>
                        <small className='client_review'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                         in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </small>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
        );
}
export default Testimonial;