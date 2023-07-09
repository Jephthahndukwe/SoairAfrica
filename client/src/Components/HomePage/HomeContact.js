import React, {Component} from 'react'
import '../stylings/style.css'
import image from '../images/image 12.png'
import image2 from '../images/image 11.png'
import axios from 'axios'

export default class HomeContact extends Component {
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
      alert("Thank you for contacting soair africa");
  })
  .catch(() => {
      alert("Failed to contact soair africa");
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
  }, 3000);
}



  render() {
  return (
    <div>
        <div className='container'>
          <div className='home-contact mt-5'>
              <h1 className='f-style text-uppercase fs-3 mt-5 text-center'>get in touch with us</h1>
              <hr className='course-line2'/>
              <div className='line4'/>
              <div className='line5'/>
              <img src={image} className='contact-img'/>
                <form onSubmit={this.formSubmit} className='text-center form container'>
                  <input type='text' placeholder='First Name' required value={this.state.firstName} onChange={this.handleFirstName}/>
                  <input type='text' placeholder='Second Name' required value={this.state.secondName} onChange={this.handleSecondName}/><br/>
                  <input type='email' placeholder='Email Address' className='contact-input' required value={this.state.email} onChange={this.handleEmail}/><br/>
                  <textarea type='message' placeholder='Message' required value={this.state.message} onChange={this.handleMessage}/>
                  <button className='f-style mt-5'>SEND</button>
                </form>
                <img src={image2} className='contact-img2'/>
          </div>
        </div>
    </div>
  )
  }
}
