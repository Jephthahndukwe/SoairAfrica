import React, { Component } from 'react'
import '../Components/stylings/style.css'
import { Link } from 'react-router-dom'
import logo from '../Components//images/SOAIR LOGO 01 1.png'
import { FaBars, FaTimes } from 'react-icons/fa'
 
export default class NavBar extends Component {
    constructor() {
      super();
      this.state = {
         show: true,
      }
    }

  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
      <img src={logo} className='logo-img'/>
    <button className="navbar-toggler" 
    onClick={ () => { this.setState({show: !this.state.show}) }}>
        {this.state.show ? <FaBars/> : <FaTimes/>}
    </button>
    <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
      <ul className="navbar-nav ms-auto">
        <li className='nav-item'><Link to='/' className="nav-link text-light">Home</Link></li>
        <li className='nav-item'><Link to='/Courses' className="nav-link text-light">Courses</Link></li>
        <li className='nav-item'><Link to='/Event' className="nav-link text-light">Events</Link></li>
        <li className='nav-item'><Link to='/Student' className="nav-link text-light">Students</Link></li>
        <li className='nav-item'><Link to='/Contact' className="nav-link text-light">Contact</Link></li>
      </ul>
    </div>
  </div>
</nav>
</>
    )
  }
}
