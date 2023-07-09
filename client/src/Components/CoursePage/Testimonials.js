import React from 'react'
import '../stylings/Course.css'
import image from '../images/image 28.png'
import image2 from '../images/Ellipse 9.png'
import image3 from '../images/image 29.png'
import { FaStar } from 'react-icons/fa'


const Testimonials = () => {
  return (
    <>
        <div className='background mt-5 pb-5 testi'>
            <div class="container pt-4">
                <div className='mt-5'>
                    <h1 className='f-style text-uppercase text-center'>our happy learners</h1>
                    <p className='f-style text-center'>Have a look at what some of our students say about us.
                    let them show you how amazing their journey has
                    been here.</p>
                </div>
                <div className='row mt-4 test'>
                    <div className='col-lg-4 col-md-6 col-sm-8 mt-4'>
                        <div className='testimony'>
                            <div className='d-flex'>
                                <img src={image} loading='lazy'/>
                                <div className='test-name ms-3 mt-2'>
                                    <h5 className='f-style'>James Uche</h5>
                                    <p className='f-style text-uppercase'>uI/uX</p>
                                </div>
                                <FaStar className='ms-7 mt-4 text-star '/>
                            </div>
                            <h5 className='f-style ms-2 mt-3'>"I had a great experience at the UI/UX Design course! The coursework was challenging but manageable, and I felt like I learned a lot in a short amount of time. The instructors were also very helpful and supportive."</h5>
                    </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-8 mt-4'>
                        <div className='testimony'>
                            <div className='d-flex'>
                                <img src={image2} loading='lazy'/>
                                <div className='test-name ms-3 mt-2'>
                                    <h5 className='f-style'>sarah wilde</h5>
                                    <p className='f-style text-uppercase'>web development</p>
                                </div>
                                <FaStar className='ms-8 mt-4 text-star '/>
                            </div>
                            <h5 className='f-style ms-2 mt-3'>"I had no prior knowledge of web development before taking the course, but after completing it I feel much more confident in my coding abilities. Highly recommend Soair School!"</h5>
                    </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-8 mt-4'>
                        <div className='testimony'>
                            <div className='d-flex'>
                                <img src={image3} loading='lazy'/>
                                <div className='test-name ms-3 mt-2'>
                                    <h5 className='f-style'>halima tafiq</h5>
                                    <p className='f-style text-uppercase'>3D Design</p>
                                </div>
                                <FaStar className='ms-7 mt-4 text-star '/>
                            </div>
                            <h5 className='f-style ms-2 mt-3'>"The 3D design school course was an invaluable experience for me. It provided me with the tools I needed to become a professional in the field of 3D design, as well as giving me a better understanding of how the industry works."</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>   
    </>
  )
}

export default Testimonials