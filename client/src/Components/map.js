import React from 'react'

const Map = () => {
  return (
    <div className='map'>
      <iframe className='gmap_iframe' width="100%" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q=soair%20code%20learner%20lagos&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
    </div>
  )
}

export default Map