import React from 'react'
import '../stylings/style.css'
import '../stylings/event.css'
import frame from '../images/Frame 125 (1).png'
import frame2 from '../images/Frame 172.png'

const Future = () => {
  return (
    <div className='future'>
        <div class="container">
            <div className='d-sm-flex ms-sm-5'>
                <img src={frame} className='future-frame' loading='lazy'/>
                <img src={frame2} className='future-frame2' loading='lazy'/>
                <div className='future-text ms-sm-6 mt-sm-4'>
                    <h2 className='f-style text-uppercase'>developing future minds</h2>
                    <hr className='line7'/><div className='span'></div>
                    <p className='f-style'>SOAIR offers this 3 months program to prepare young and old Africans for the future workspace. We follow a practical approved teaching pattern and set our students up with project development where they have to come up with a solution before earning their certificate. SOAIR is one of its kind in Africa that develops robotics and automation system for users by our students during their training days. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Future