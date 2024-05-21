import React from 'react'
import "./Footer.css"

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='p-5'>
      <div className='footer__above pb-5'>
        <div className="container d-flex flex-column align-items-center">
         <h1>Subscribe to newsletter</h1>
         <div style={{width:"610px"}} className='d-flex mt-5'>
          <input style={{width:"73%"}} type="text" placeholder='Email Address' />
          <button style={{width:"27%"}}>Subscribe</button>
         </div>

         
        </div>
      </div>

      <div className='footer__mid d-flex justify-content-center flex-column align-items-center'>
      <hr style={{width:"54%"}} />
        <div className="container d-flex justify-content-between">
       

        <div className='footer__mid__left'>
         <div className='footer__mid__left__logo d-flex gap-2 align-items-center'><img width={"50px"} height={"43px"} src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" /><span>COURSE</span></div>
         <p>In aliquam, augue a gravida rutrum, <br /> ante nisl fermentum nulla, vitae <br /> tempor nisl ligula vel nunc. Proin quis <br /> mi malesuada, finibus tortor <br /> fermentum, tempor lacus.</p>
        </div>
        
        <div className='footer__mid__menu'>
        <p>Menu</p>
        <ul className='d-flex flex-column gap-2'>
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>New</li>
          <li>Contact</li>
        </ul>
        </div>

        <div className='footer__mid__links'>
        <p>Useful Links</p>
        <ul className='d-flex flex-column gap-2'>
          <li>Testimonials</li>
          <li>FAQ</li>
          <li>Community</li>
          <li>Campus Pictures</li>
          <li>Tuitions</li>
        </ul>
        </div>

        <div className='footer__mid__contact'>
        <p>Contact</p>
         <ul className='d-flex flex-column gap-3'>
          <li className='d-flex gap-3 align-items-center'><i class="fa-solid fa-location-dot"></i> Blvd Libertad, 34 m05200 Arévalo</li>
          <li className='d-flex gap-3 align-items-center'><i class="fa-solid fa-mobile"></i> 0034 37483 2445 322</li>
          <li className='d-flex gap-3 align-items-center'><i class="fa-regular fa-envelope"></i> hello@company.com</li>
         </ul>
        </div>
        </div>
      </div>


      <div className='footer__down d-flex  flex-column align-items-center'>
      <hr style={{width:"54%"}} />
        <div className="container d-flex justify-content-between pt-2">
        <span>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i>by  <Link className='text-decoration-none'>Colorlib</Link> </span>
        <div className='footer__down__icons d-flex gap-5'>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
