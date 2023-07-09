import React, { Component } from 'react'
import '../stylings/Course.css'
import logo from '../images/SOAIR LOGO 01 1.png'
import axios from 'axios'



export default class EnrollPage extends Component {
   state={
    Name: "",
    Email: "",
    Number: "",
    course: "",
    payment: "",
    sent: false
   }

// HANDLING OF EVENT 

   handleName = (e) => {                                           
    this.setState({
        Name:e.target.value
    })
   }
   handleEmail = (e) => {
    this.setState({
        Email:e.target.value
    })
   }
   handleNumber = (e) => {
    this.setState({
        Number:e.target.value
    })
   }
   handleCourse = (e) => {
    this.setState({
        course:e.target.value
    })
   }
   handlePayment = (e) => {
    this.setState({
        payment:e.target.value
    })
   }


// FORM SUBMIT

formSubmit = (e) => {
    e.preventDefault();

    let data = {
        Name: this.state.Name,
        Email: this.state.Email,
        Number: this.state.Number,
        course: this.state.course,
        payment: this.state.payment
    }

    axios.post('/api/form', data)
    .then(res => {
        this.setState({
            sent: true,
        },this.resetForm())
        alert("Registration Completed");
    })
    .catch(() => {
        alert("Register not completed");
        console.log('Register not completed');
    })
}

// FORM RESET

resetForm = () => {
    this.setState({
        Name: "",
        Email: "",
        Number: "",
        course: "",
        payment: ""
    })

    setTimeout(() => {
     this.setState({
        sent: false,
     })   
    }, 3000);
}


 render() {   
  return (
    <div className='container-fluid'>
        <div className='nav d-sm-flex justify-content-between align-items-center p-4'>
            <img src={logo} className='logo-img2' />
            <h1 className='f-style text-end'>Registration <br/> Form</h1>
        </div>
        <h2 className='f-style text-end p-4 fs-3'>Course Duration 3 Months</h2>

        <form onSubmit={this.formSubmit} className='enrollForm'>
            <div className='text-field f-style'>
                <input type='text' name='Name' required value={this.state.Name} onChange={this.handleName}/>
                <span></span>
                <label>Names:</label><br/>
            </div>
            <div className='d-sm-flex mt-5 f-style'>
                <div className='text-field email'>
                    <input type='email' name='Email' required value={this.state.Email} onChange={this.handleEmail} />
                    <span></span>                
                    <label>Email Address:</label>
                </div>
                <div className='text-field ms-sm-5 email'>
                    <input type='text' name='Number' required value={this.state.Number} onChange={this.handleNumber} />
                    <span></span>              
                    <label>Phone Number:</label>
                </div>
            </div>
            <div className='text-field f-style'>
                <select className='select-field' required value={this.state.course} onChange={this.handleCourse}>
                    <option value=''>---Select Course---</option>
                    <option value='Web Development'>Web Development</option>
                    <option value='Python Programming Language'>Python Programming Language</option>
                    <option value='Game Development'>Game Development</option>
                    <option value='Mobile Development'>Mobile Development</option>
                    <option value='Artificial Intelligence and Robotics'>Artificial Intelligence and Robotics</option>
                    <option value='3D Design and Modeling'>3D Designs and Modeling</option>
                    <option value='Data Science'>Data Science</option>
                </select>
            </div>
            <div className='text-field f-style mt-3'>
                <select className='select-field' required value={this.state.payment} onChange={this.handlePayment}>
                    <option value=''>---Select Payment---</option>
                    <option value='Cash'>Cash</option>
                    <option value='Bank Transfer'>Bank Transfer | Name</option>
                </select>
            </div>

            <div className='desire-course mt-6 ms-sm-4'>
                <h3>Pick Your Desired Course</h3>
                <div className='pick ms-sm-5 mt-4'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        Web Development <hr className='enroll-hr ms-3 mt-4'/> <span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                       <span className='courseName'> Python Programming Language</span> <hr className='enroll-hr2 ms-3 mt-4'/><span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        Game Development <hr className='enroll-hr3 ms-3 mt-4'/> <span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        Mobile Development <hr className='enroll-hr4 ms-3 mt-4'/><span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        <span className='courseName'>Artificial Intelligence and Robotics</span> <hr className='enroll-hr5 ms-3 mt-4'/> <span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        <span className='courseName'>3D Designs and Modeling</span> <hr className='enroll-hr6 ms-3 mt-4'/><span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        Data Science <hr className='enroll-hr7 ms-3 mt-4'/> <span className='ms-4'>#150,000</span>
                    </label>
                </div>
            </div>

        <div className='p-sm-4 mt-5'>
            <div className='payment'>
                <h2>Bank Info</h2>
            </div>
            <div className='bank text-start f-style fs-4 me-sm-6'>
                Bank Account: <br/>
                Learners Technology NIG LTD <br/>
                1022732276 <br/>
                UBA.
            </div>
        </div>
          <button type='submit' className='f-style enrollBtn mt-5 fs-5'>Submit</button>
        </form>
    </div>
  )
 }
}