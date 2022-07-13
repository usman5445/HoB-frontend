import React from 'react'
import "./Footer.css"
import facebook from "../../assests/Facebook.svg"
import instagram from "../../assests/InstagramCircle.svg"
import twitter from "../../assests/TwitterCircled.svg"
const Footer = () => {
  return (
    <div className='Footer_container d-flex  justify-content-center align-items-center flex-column mx-4' style={{overflowX:"hidden"}}>
      <div className='footer_heading mb-3'>Keep Up to Date</div>
      <input type="email" className="form-control my-2 emailcont" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your e-mail id' style={{height:"3rem"}}/>
      <button type="button" className="btn btn-primary readmore mb-5" style={{background:"white",color:"black",marginTop:"1.3rem",borderColor:"black",borderWidth:"3px",width:"9rem",height:"3.7rem",fontSize:"1.1rem",fontWeight:"800"}}>Read More</button>
      <div className='Aboutus mt-1 mb-4'>About Us  |  Track Order  |  We’re Hiring College Collaboration</div>
      <div className='Aboutus mt-1 mb-5'>FAQ  |  Terms & Conditions  |  Return Policy Privacy Policy</div>
      <div className='Contactus_conatiner d-flex  justify-content-center align-items-center flex-column'>
        <div className='contact us'>Contact Us</div>
        <div className='contact'>houseofbabas@gmail.com</div>
        <div className='contact'>+91 12345 67890</div>
      </div>

      <div className='follow mt-5 mb-2 '>Follow us</div>
      <div className='socialmedia d-flex  justify-content-center align-items-center flex-row'>
      <img src={facebook} alt="..."/>
      <img src={instagram} alt="..."/>
      <img src={twitter} alt="..."/>
      </div>
    </div>
  )
}

export default Footer
