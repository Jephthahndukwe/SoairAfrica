import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import '../stylings/style.css'
import '../stylings/event.css'
// import '../stylings/student.css'
import NavBar from '../NavBar'
import { FaSearch, FaCalendar } from 'react-icons/fa'
import frame from '../images/Frame 119.png'
import image from '../images/image 2.png'
import frame2 from '../images/Frame 162.png'
import group from '../images/Group 2.png'
import Programs from './Programs'
import program from '../images/program.png'
import program2 from '../images/program2.png'
import program3 from '../images/program3.png'
import Future from './Future'
import ProgramTwo from './ProgramTwo'
import data from "./EventTemplate"


const Event = () => {
  const [searchTerms, setSearchTerms] = useState("");
  

  return (
    <>
     <div>
        <NavBar/>
        <div className='background3'>
        <div className="container pt-6 ">
            <div className='event'>
                <h1 className='f-style text-uppercase text-white'>events</h1>
                <hr className='line text-white'/><div className='span'></div>
                <p className='f-style text-white'>Soair is a great way to learn a new skill, and our upcoming event <br className='none'/> is the perfect opportunity to get started. We'll be covering the basics <br className='none'/> of different skills, as well as some more advanced topics. Our experienced <br className='none'/> instructors will be available to answer any questions you may have. <br className='none'/> Don't miss out on this chance to expand your skillet </p>
                <input placeholder='Events...' className='mt-3 f-style' onChange={(event) => {
                  setSearchTerms(event.target.value);
                }}/>
                <FaSearch className='search f-style fs-5'/>
                <div className='eventSide float-lg-end float-sm-none'>
                    <img src={frame} className='image' loading='lazy'/>
                </div>
            </div>
        </div>
       
        </div>
        <img src={frame2} className='frame mt-auto'/>  
   </div>
    <Programs/>

     <center>
          <div class="container">
            <div className='student'>
            <div className='row program-img ms-sm-5'>
          {
                    data
                    .filter((val) => {
                      if(searchTerms == "") {
                        return val;
                      } else if(val.place.toLowerCase().includes(searchTerms.toLowerCase())) {
                        return val;
                      }else if(val.date.toLowerCase().includes(searchTerms.toLowerCase())) {
                        return val;
                      }
                    })
                    .map((val) => {
                      return (
                        <div className='col-lg-6 col-md-6 col-sm-6 mt-6'>
                        <img src={val.image} className='image' loading='lazy'/>
                        <div className='program-text'>
                          <h2 className='f-style text-uppercase text-start ms-2 pt-4'>{val.place}</h2>
                          <p className='f-style ms-2 text-start'>{val.text}</p>
                          <div className='ms-2 d-flex'>
                            <FaCalendar className='mt-1'/>
                            <p className='f-style ms-2'>{val.date}</p>
                          </div>
                          <Link to='/' className='f-style ms-5 program-link text-start'>{val.link}</Link>
                      </div>
                    </div>
                      )
                    })
                  } 

              
                </div>
            </div>
        </div>
     </center>

    <Future/>
    <ProgramTwo/>
    </>
  )
}

export default Event