import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='d-flex justify-content-center'>
      <div className="container d-flex  bg-light justify-content-between align-items-center">
       <div style={{width:"80%"}} className='header__left d-flex align-items-center justify-content-around bg-light text-dark p-4'>
       <div className='header__left__logo d-flex gap-2 align-items-center'>
       <img width={"51px"} height={"43px"} src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
       <span>COURSE</span>
       </div>
        <ul className='header__left__menu d-flex list-unstyled gap-5 align-items-center mt-3'>
          <li><Link  to="/">Home</Link></li>
          <li><Link  to="/admin">Admin</Link></li>
          <li><Link  to="/admin/add">Add</Link></li>
        </ul>
       </div> 

       <div style={{width:"20%"}} className='header__right d-flex gap-3 align-items-center p-4 justify-content-center'>
       <i style={{fontSize:"20px"}} class="fa-solid fa-phone-volume"></i>
       <p className='mt-3'>+43 4566 7788 2457</p>
       </div>
      </div>
    </header>
  )
}

export default Header
