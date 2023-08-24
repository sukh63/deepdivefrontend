import React from 'react'
import Navbar from './Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import img from "../Assets/mikolaj-DCzpr09cTXY-unsplash.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
 
   
  return (
    <section>
    <Navbar/>
    <div >
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide>
    <div className='parentdiv'>
    <img src={img} alt="img" />
    <div class="centered">
    
    <h1>Book Management</h1>
    <p>Add Books | Read Books</p>
   
   <div className='row justify-content-center'>
     <NavLink to="/Login"><button className='btn simplebtn'>Login</button></NavLink>
   </div>
    </div>
  
    </div>
    </SwiperSlide>
  
   
   
  </Swiper>
 
    </div>
   
  
    
   
    <Footer/>
    </section>
  )
}

export default Home