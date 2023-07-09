import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import '../stylings/style.css'
import { Link } from 'react-router-dom'
import frame from '../images/Frame 162.png'
import StartCourse from './StartCourse'
import Solutions from './Solutions'
import HomeContact from './HomeContact'
import Imageslide from './Imageslide'
import ImageSlider from './ImageSlider'

const Home = () => {
 

  return (
    <>
    <div>
      <NavBar/>
        <div className='home background2'>
            <div className="container pt-sm-6">
                <div className='head f-style text-white pt-6'>
                    <h1 className='text-uppercase fs-3'>giving tech the african feeling</h1>
                    <hr className='line'/><div className='span'></div>
                    <p className='f-style'>School Of Artificial Intelligence and Robotics (SOAIR) is a first ever <br className='none'/> futuristic institution in Africa that focuses on training and preparing <br className='none'/> Africans for the unknown future with some advanced level of Technology, <br className='none'/> Research and Development. School Of Artificial Intelligence & Robotics (SOAIR) <br className='none'/> is an EduTech and Technology R&D company that Trains and Build Solutions <br className='none'/> technologically for Africans and the World at large. </p>
                    <Link to='/Courses'><button className='btn-generally me-4'>ENROLL</button></Link>
                    <Link to='/Event'><button className='btn-generally btn-second'>EVENTS</button></Link>
                </div>
                <div className='eventSide float-lg-end float-sm-none slider'>
                  <Imageslide slides={ImageSlider} loading='lazy'/>
                </div>
            </div>
        </div>
        <img src={frame} className='frame'/>
    </div>

    <StartCourse/>
    <Solutions/>
    <HomeContact/>
    </>
  )
}

export default Home