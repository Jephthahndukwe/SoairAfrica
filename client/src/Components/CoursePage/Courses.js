import React from 'react'
import '../stylings/Course.css'
import NavBar from '../NavBar'
import frame2 from '../images/Frame 162.png'
import image from '../images/image 2.png'
import frame from '../images/Frame 119 (2).png'
import certificate from '../images/Certificate.png'
import office from '../images/Office.png'
import beginner from '../images/Beginner.png'
import internship from '../images/Internship.png'
import Startcourse from './Startcourse'
import Testimonials from './Testimonials'


const Courses = () => {
    return (
      <>
      <div>
        <NavBar/>

           <div className='background3'>
          <div className="container pt-6">
            <div className='event course-event'>
                <h2 className='f-style text-uppercase text-white'>DID YOU KNOW?</h2>
                <h4 className='f-style text-white text-uppercase mt-4'>MANY UNIVERSITY COURSES WILL <br className='none'/> BE IRRELEVANT SOON, <br className='none'/> REGISTER FOR THE FUTURE TODAY!</h4>
                <div className='d-flex mt-4'>
                  <img src={certificate} className='courseimage'/>
                  <p className='f-style text-white text-capitalize ms-2'>Earn your certificate</p>
                </div>
                <div className='d-flex'>
                  <img src={office} className='courseimage'/>
                  <p className='f-style text-white text-capitalize ms-2'>accessibility to hub workspace</p>
                </div>
                <div className='d-flex'>
                  <img src={beginner} className='courseimage'/>
                  <p className='f-style text-white text-capitalize ms-2'>military pattern of training</p>
                </div>
                <div className='d-flex'>
                  <img src={internship} className='courseimage'/>
                  <p className='f-style text-white text-capitalize ms-2'>one month internship with a company</p>
                </div>
                <div className='eventSide float-lg-end float-sm-none'>
                    <img src={frame} className='image image2'/>
                </div>
            </div>
        </div>
       
        </div>
        <img src={frame2} className='frame mt-auto'/>  
   </div>       

      <Startcourse/>
      <Testimonials/>
      </>
    )
}

export default Courses