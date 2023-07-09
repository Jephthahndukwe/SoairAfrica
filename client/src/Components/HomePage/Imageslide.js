import React, { useState } from 'react'
import SliderData from './ImageSlider'
import doubleRight from '../images/Double Right.png'
import doubleLeft from '../images/Double Left.png'


const Imageslide = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;  


    const nextSlide = () =>  {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
    }
  
    if (!Array.isArray(slides) || slides.length <= 0 ) {
      return null;
    }
    

  return (
    <div className='slider'>
            <img src={doubleLeft} className='left-arrow' onClick={prevSlide}/> 
            <img src={doubleRight} className='right-arrow' onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
            return (
                <div 
                className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <img src={slide.images} className='slide-image' />
                    )}
                </div>
            )
            })}

    </div>
  )
}

export default Imageslide