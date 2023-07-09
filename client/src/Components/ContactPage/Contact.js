import React, {Component} from 'react'
import '../stylings/contact.css'
import { FaSearch, FaPhoneSquare, FaLocationArrow, FaEnvelope } from 'react-icons/fa'
import NavBar from '../NavBar'
import frame2 from '../images/Frame 162.png'
import image from '../images/image 2.png'
import image1 from '../images/image 15.png'
import image2 from '../images/image 12 (1).png'
import image3 from '../images/image 13.png'
import image4 from '../images//image 14.png'
import ContactFuture from './ContactFuture'
import axios from 'axios'


export default class Contact extends Component {
  state={
    firstName: "",
    secondName: "",
    email: "",
    message: "",
    sent: false
   }

// Handling events

  handleFirstName = (e) => {
    this.setState({
      firstName:e.target.value
    })
  }
  handleSecondName = (e) => {
    this.setState({
      secondName:e.target.value
    })
  }
  handleEmail = (e) => {
    this.setState({
      email:e.target.value
    })
  }
  handleMessage = (e) => {
    this.setState({
      message:e.target.value
    })
  }


  // FORM SUBMIT

formSubmit = (e) => {
  e.preventDefault();

  let data2 = {
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      email: this.state.email,
      message: this.state.message,
  }

  axios.post('/api/contact', data2)
  .then(res => {
      this.setState({
          sent: true,
      },this.resetForm())
      alert("Thank you for contacting Soair Africa");
  })
  .catch(() => {
      alert("Failed to contact Soair Africa");
      console.log('Failed to contact Soair Africa');
  })
}

// FORM RESET

resetForm = () => {
  this.setState({
      firstName: "",
      secondName: "",
      email: "",
      message: ""
  })

  setTimeout(() => {
   this.setState({
      sent: false,
   })   
  });
}


  render() {
  return (
    <>
     <div>
        <NavBar/>

        <div className='background2'>
            <div className="container pt-7">
                <div className='event'>
                    <h1 className='f-style text-uppercase text-white'>REACH OUT TO US</h1>
                    <hr className='line text-white'/><div className='span'></div>
                    <div className='d-flex'>
                      <FaPhoneSquare className='f-style text-white mt-1'/>
                      <p className='f-style text-white ms-2'>09091920347, 08065089535</p>
                    </div>
                    <div className='d-flex'>
                      <FaLocationArrow className='f-style text-white mt-1'/>
                      <p className='f-style text-white ms-2'>SOAIR HUB Nigerian Airforce Base Ikeja <br className='none'/> www.soairafrica.com</p>
                    </div>
                    <div className='d-flex'>
                      <FaEnvelope className='f-style text-white mt-1'/>
                      <p className='f-style text-white ms-2'>soairafrica@gmail.com</p>
                    </div>
                    <div className='icons mt-sm-6 d-flex'>
                    <a href='' target='_blank'><img src={image1} className='social-img text-center me-3'/></a>
                    <a href='' target='_blank'><img src={image2}  className='social-img text-center me-3'/></a>
                    <a href='' target='_blank'><img src={image3} className='social-img text-center me-3'/></a>
                    <a href='' target='_blank'><img src={image4} className='social-img text-center me-3'/></a>
                    </div>
                    <div className='contact float-lg-end float-sm-none ms-sm-7'>
                        <form onSubmit={this.formSubmit}>
                          <input  type='text' placeholder='First Name' className='f-style' required value={this.state.firstName} onChange={this.handleFirstName}/>
                          <input type='text' placeholder='Last Name' className='f-style' required value={this.state.secondName} onChange={this.handleSecondName}/><br/>
                          <input type='email' placeholder='Email Address' className='mail f-style' required value={this.state.email} onChange={this.handleEmail}/><br/>
                          <textarea type='text' placeholder='Message' className='f-style' required value={this.state.message} onChange={this.handleMessage}/><br/>
                          <button type='submit' className='f-style text-white ms-sm-5 mt-3'>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        
            </div>
            <img src={frame2} className='frame FRAMEE mt-aut'/>
      </div>

    <ContactFuture/>
    </>
  )
  }
}