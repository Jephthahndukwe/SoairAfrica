import React from 'react'
import '../stylings/Course.css'
import image from '../images/image 3.png'
import { Link } from 'react-router-dom'
import image2 from '../images/image 6.png'
import image3 from '../images/image 5.png'
import image4 from '../images/image 8.png'
import image5 from '../images/image 9.png'
import image6 from '../images/image 4.png'
import image7 from '../images/Python.png' 


const Startcourse = () => {
  return (
    <div>
      <div class="container">
        <h1 className='f-style text-uppercase text-center mt-4'>start a course today</h1>
        <hr className='course-line3' />
        <div className='line4 line6' />
        <div className='line5 line8' />
        <h5 className='f-style text-center'>SOAIR is one of its kind in Africa that develops robotics and automation system <br className='none'/> for users by our students during their training days. </h5>
      </div>
      <hr />
      <div className='coursecontain'>
      <div class="container-fluid mt-5">
        <div className='courseitem'>
          <img src={image} className='courseimg ms-sm-5' loading='lazy'/>
          <p className='f-style text-uppercase text-white ps-sm-4 pt-4 fs-4 coursename'>ui/ux design</p>
        </div>
        <div className='float-sm-end float-md-end coursecontent'>
          <h2 className='f-style text-uppercase'>ui/ux design</h2>
          <p className='f-style'>When using a website, app, or other electronic device, UI refers <br className='none'/> to the displays, buttons, toggles, icons, and other visual elements <br className='none'/> that you interact with. The entire contact you have with a product, <br className='none'/>including how you feel about it, is referred to as UX.</p>
        </div>
        <div className='d-flex enrollment ms-sm-8'>
          <Link to='/EnrollPage' className='f-style enroll text-white'>ENROLL</Link>
          <p className='f-style month ms-sm-8'>3 Months</p>
          <p className='f-style date'>9:00 am</p>
        </div>
      </div>
      <hr/>
      <div class="container-fluid mt-5">
        <div className='courseitem'>
          <img src={image2} className='courseimg ms-sm-5' loading='lazy'/>
          <p className='f-style text-uppercase text-white ps-sm-4 pt-4 fs-5 coursename name3'>web development</p>
        </div>
        <div className='float-md-end coursecontent'>
          <h2 className='f-style text-uppercase'>web development</h2>
          <p className='f-style'>The effort involved in creating a website for the Internet or an <br className='none'/> intranet is known as web development. Web development can range  <br className='none'/> from creating a simple static website with plain text to creating  <br className='none'/>complicated web apps, electronic companies, <br className='none'/>  and socialworking services.</p>
        </div>
        <div className='d-flex enrollment ms-sm-8'>
          <Link to='/EnrollPage' className='f-style enroll text-white'>ENROLL</Link>
          <p className='f-style month ms-sm-8'>3 Months</p>
          <p className='f-style date'>9:00 am</p>
        </div>
      </div>
      <hr/>
      <div class="container-fluid mt-5">
        <div className='courseitem'>
          <img src={image3} className='courseimg ms-sm-5' loading='lazy'/>
          <p className='f-style text-uppercase text-white ps-sm-4 pt-4 fs-4 coursename'>ai & robotics</p>
        </div>
        <div className='float-md-end coursecontent'>
          <h2 className='f-style text-uppercase'>ai & robotics</h2>
          <p className='f-style'>Robotics is the creation of robots that can perform tasks <br className='none'/> without  the need for human intervention, whereas AI is the process <br className='none'/> of systems imitating the human mind to make decisions and 'learn.'</p>
        </div>
        <div className='d-flex enrollment ms-sm-8'>
          <Link to='/EnrollPage' className='f-style enroll text-white'>ENROLL</Link>
          <p className='f-style month ms-sm-8'>3 Months</p>
          <p className='f-style date'>9:00 am</p>
        </div>
      </div>
      <hr/>
      <div class="container-fluid mt-5">
        <div className='courseitem'>
          <img src={image4} className='courseimg ms-sm-5' loading='lazy'/>
          <p className='f-style text-uppercase text-white ps-sm-4 pt-4 fs-4 coursename'>data science</p>
        </div>
        <div className='float-md-end coursecontent'>
          <h2 className='f-style text-uppercase'>data science</h2>
          <p className='f-style'>Advanced analytics is the autonomous or semi-autonomous <br className='none'/> analysis of data or material utilizing complex techniques and tools that <br className='none'/> are often beyond those used in traditional business intelligence (BI) <br className='none'/> to uncover deeper insights, make predictions, or <br className='none'/> produce recommendations.</p>
        </div>
        <div className='d-flex enrollment ms-sm-8'>
          <Link to='/EnrollPage' className='f-style enroll text-white'>ENROLL</Link>
          <p className='f-style month ms-sm-8'>3 Months</p>
          <p className='f-style date'>9:00 am</p>
        </div>
      </div>
      <hr/>
      <div class="container-fluid">
        <div className='courseitem'>
          <img src={image5} className='courseimg' loading='lazy'/>
          <p className='f-style text-uppercase text-white ps-sm-2 pt-4 fs-5 coursename name3'>MOBILE development</p>
        </div>
        <div className='float-md-end coursecontent'>
          <h2 className='f-style text-uppercase'>MOBILE development</h2>
          <p className='f-style'>The act or process of developing a mobile app for mobile <br className='none'/> devices such as personal digital assistants, enterprise  digital assistants, <br className='none'/> or mobile phones is known as mobile app development. <br className='none'/> These software applications are made to run on mobile devices <br className='none'/> like smartphones and tablets.</p>
        </div>
        <div className='d-flex enrollment ms-sm-8'>
          <Link to='/EnrollPage' className='f-style enroll text-white'>ENROLL</Link>
          <p className='f-style month ms-sm-8'>3 Months</p>
          <p className='f-style date'>9:00 am</p>
        </div>
      </div>
      <hr/>
      <div class="container-fluid mt-5">
        <div className='courseitem'>
          <img src={image6} className='courseimg ms-sm-5' loading='lazy'/>
          <p className='f-style text-uppercase text-white ps-sm-4 pt-4 fs-4 coursename'>3d design</p>
        </div>
        <div className='float-md-end coursecontent'>
          <h2 className='f-style text-uppercase'>3d design</h2>
          <p className='f-style'>3D modeling is the process of creating a mathematical <br className='none'/> coordinate-based representation of any surface of an object in three <br className='none'/> dimensions in 3D computer graphics.</p>
        </div>
        <div className='d-flex enrollment ms-sm-8'>
          <Link to='/EnrollPage' className='f-style enroll text-white'>ENROLL</Link>
          <p className='f-style month ms-sm-8'>3 Months</p>
          <p className='f-style date'>9:00 am</p>
        </div>
      </div>
      <hr/>
      <div class="container-fluid mt-5">
        <div className='courseitem'>
          <img src={image7} className='courseimg ms-sm-5' loading='lazy'/>
          <p className='f-style text-uppercase text-white text-center pt-4 fs-5 coursename name2'>python programming</p>
        </div>
        <div className='float-md-end coursecontent'>
          <h2 className='f-style text-uppercase'>python programming</h2>
          <p className='f-style'>3D modeling is the process of creating a mathematical <br className='none'/> coordinate-based representation of any surface of an object in three <br className='none'/> dimensions in 3D computer graphics.</p>
        </div>
        <div className='d-flex enrollment ms-sm-8'>
          <Link to='/EnrollPage' className='f-style enroll text-white'>ENROLL</Link>
          <p className='f-style month ms-sm-8'>3 Months</p>
          <p className='f-style date'>9:00 am</p>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Startcourse