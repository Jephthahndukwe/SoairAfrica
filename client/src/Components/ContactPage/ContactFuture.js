import React from 'react'
import '../stylings/contact.css'
import frame from '../images/Frame 125 (1).png'
import frame2 from '../images/Frame 172.png'

const ContactFuture = () => {
  return (
    <div>
         <div className='mt-6 contactFuture'>
        <div class="container">
            <div className='d-sm-flex ms-sm-5'>
                <img src={frame} className='future-frame'/>
                <img src={frame2} className='future-frame2'/>
                <div className='future-text ms-sm-6 mt-sm-4'>
                    <h2 className='f-style text-uppercase'>developing future minds</h2>
                    <hr className='line7'/><div className='span'></div>
                    <p className='f-style'>We hereby, propose to bring our full capacity to Lagos City Polytechnic for as little #30,000 per student. Also, students have a chance for an internship program with one of the leading tech Re-engineering companies in Nigeria, Decimal. We will appreciate if we are granted an audience in a brief meeting and presentation session for any questions concerning the program. We look forward to receiving a favorable response from you in this regard</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContactFuture