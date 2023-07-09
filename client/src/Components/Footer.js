import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/SOAIR LOGO 01 1.png'
import image from './images/image 15.png'
import image2 from './images/image 12 (1).png'
import image3 from './images/image 13.png'
import image4 from './images//image 14.png'

const Footer = () => {
  return (
    <div className='bg-dark foot'>
        <div className="container">
            <img src={logo} className='mt-5'/>
            <div className="row p-5 footer">
                <div className='col-lg-4 col-md-6 col-sm-5 mt-5'>
                    <Link to='/' className='f-style text-light'>HOME</Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-5 mt-5'>
                    <Link to='/' className='f-style text-light'>ABOUT</Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-5 mt-5'>
                    <Link to='/Contact' className='f-style text-light'>CONTACT</Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-5 mt-5'>
                    <Link to='/' className='f-style text-light'>GALLERY</Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-5 mt-5'>
                    <Link to='/Courses' className='f-style text-light'>COURSES</Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-5 mt-5'>
                    <Link to='/' className='f-style text-light'>PORTFOLIO</Link>
                </div>
            </div>
            <div className="p-5 text-center social-icon d-flex">
                    <a href='' target='_blank'><img src={image} className='social-img text-center me-3'/></a>
                    <a href='https://www.instagram.com/soairafrica/?igshid=YmMyMTA2M2Y%3D&__coig_restricted=1' target='_blank'><img src={image2}  className='social-img text-center me-3'/></a>
                    <a href='' target='_blank'><img src={image3} className='social-img text-center me-3'/></a>
                    <a href='' target='_blank'><img src={image4} className='social-img text-center me-3'/></a>
            </div>
            <hr className='foot-hr'/>
            <p className='f-style text-light text-uppercase text-center pb-4'>copyright @soair 2022. all rights reserved</p>
        </div>
    </div>
  )
}

export default Footer