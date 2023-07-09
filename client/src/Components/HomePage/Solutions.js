import React from 'react'
import '../stylings/style.css'
import frame from '../images/Frame 125.png'
import frame2 from '../images/Frame 162.png'

const Solutions = () => {
  return (
    <div>
        <div class="container-fluid">
            <div className='solution d-sm-flex'>
              <img src={frame} className='frame-img' loading='lazy'/>
              <div className='solution-text'>
                <h2 className='f-style fs-4 text-uppercase mt-3 ms-5'>we turn ideas into solutions</h2>
                <hr className='line'/><div className='span'></div>
                <p className='f-style mt-4 ms-sm-5'>SOAIR has a subsidiary called Code Learners, Code Learners <br className='none'/> is a technology educational institution that teaches coding <br className='none'/> and computer programming language majorly to individuals <br className='none'/> between the age of six to sixteen at their homes, schools or offices. <br className='none'/> The burning concern of the institution is to tackle poor solution skills <br className='none'/> among young and old Nigerians, Code learners is  presently training over <br className='none'/> 2,500 students from Federal school, Public and Private school. </p>
              </div>
            </div>
        </div>
        <img src={frame2} className='frame'/>
    </div>
  )
}

export default Solutions