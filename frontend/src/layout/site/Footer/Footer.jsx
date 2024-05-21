import React from 'react'
import "./Footer.css"

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

      <div className='footer__mid'>
        <div className="container">
        <hr />
        </div>
      </div>


      <div className='footer__down'>
        <div className="container">

        </div>
      </div>
    </footer>
  )
}

export default Footer
