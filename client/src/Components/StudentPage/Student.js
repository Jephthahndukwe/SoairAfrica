import React, { useState } from 'react'
import '../stylings/style.css'
import '../stylings/event.css'
import '../stylings/student.css'
import NavBar from '../NavBar'
import { FaSearch, FaCalendar } from 'react-icons/fa'
import frame from '../images/Frame 119 (1).png'
import image from '../images/image 2.png'
import frame2 from '../images/Frame 162.png'
import group from '../images/Group 2.png'
import selectData from './SelectTemplate'

const Student = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const [selectTerms, setSelectTerms] = useState("");

  return (
    <>
     <div>
        <NavBar/>
        <div className='background2'>
            <div className="container pt-7">
                <div className='event'>
                    <h1 className='f-style text-uppercase text-white'>our students</h1>
                    <hr className='line text-white'/><div className='span'></div>
                    <h3 className='f-style text-white'>SOAIR is for everyone...</h3>
                    <p className='f-style text-white'>connect with so many here, build strong and networks . <br className='none'/> after all we are just setting up the best for you</p>
                    <input placeholder='Students...' className='mt-3 f-style' onChange={(event) => {
                      setSearchTerms(event.target.value);
                    }}/>
                    <FaSearch className='search f-style fs-5'/>
                    <div className='eventSide float-lg-end float-sm-none'>
                        <img src={frame} className='image' loading='lazy'/>
                    </div>
                </div>
            </div>
        
            </div>
            <img src={frame2} className='frame FRAMEE mt-auto'/>
      </div>


      <div class="container">
      <div className='programs d-sm-flex mt-5'>
          <h1 className='f-style text-uppercase fs-2 text-center'>our students</h1>
        </div>

         <center>
         <div className='student'>
      <div className='row program-img program-img2 ms-sm-5'>
          {
            selectData
            .filter((val) => {
              if(searchTerms == "") {
                return val;
              } else if(val.name.toLowerCase().includes(searchTerms.toLowerCase())) {
                return val;
              }else if(val.date.toLowerCase().includes(searchTerms.toLowerCase())) {
                return val;
              }else if(val.work.toLowerCase().includes(searchTerms.toLowerCase())) {
                return val;
              }
            })
            .map((val) => {
              return(
                <div className='col-lg-6 col-md-6 col-sm-6 mt-6 hey' key={val.id}>
                <img src={val.image} className='image' loading='lazy'/>
                <div className='program-text program2'>
                  <h2 className='f-style text-uppercase ms-2 pt-4 text-start'>{val.name}</h2>
                  <p className='f-style ms-2 text-start'>{val.work}</p>
                  <p className='f-style ms-2 text-capitalize text-start'>{val.text}</p>
                  <p className='f-style ms-2 student-link text-start'><a href='' target='_blank'>{val.link}</a></p>
                  <div className='ms-2 d-flex'>
                    <FaCalendar className='mt-1'/>
                    <p className='f-style ms-2'>{val.date}</p>
                  </div>
              </div>
            </div>
              )
            })
          }
        </div>
      </div>
         </center>
        </div>
    </>
  )
}

export default Student