import React, { useState } from 'react'
import '../stylings/style.css'
import '../stylings/event.css'
import { Link } from 'react-router-dom'
import { FaCalendar } from 'react-icons/fa'
import data from './SecondTemplate'

const ProgramTwo = () => {
    const [noOfElement, setNoOfElement] = useState(2);
    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement); 

    }

    const slice = data.cardData.slice(0, noOfElement);

  return (
    <div>
        <div class="container">
            <div className='program-two'>
                    <div class="row">

                        {slice.map((item) => {
                            return (
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                <img src={item.image} className='image pt-6' loading='lazy'/>
                                <div className='program-text text2'>
                                    <h2 className='f-style text-uppercase ms-2 pt-4'>{item.place}</h2>
                                    <p className='f-style ms-2'>{item.text}</p>
                                    <div className='ms-2 d-flex'>
                                    <FaCalendar className='mt-1'/>
                                    <p className='f-style ms-2'>{item.date}</p>
                                    </div>
                                    <Link to='/' className='f-style ms-5 program-link'>{item.link}</Link>
                                </div>
                            </div>
                            )
                        })}
                </div>
                    <center>
                    <button className='f-style text-white' onClick={() => loadMore()}>LOAD MORE</button>
                    </center>
          </div>
        </div>
    </div>
  )
}

export default ProgramTwo