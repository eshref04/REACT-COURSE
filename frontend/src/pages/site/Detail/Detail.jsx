import React, { useEffect } from 'react'
import "./Detail.css"
import { useState } from 'react'
import axios from 'axios'
import HeroSection from '../../../components/HeroSection/HeroSection'
import { useParams } from 'react-router'
import { Helmet } from 'react-helmet-async'


const Detail = () => {

  const [item,setItem]=useState([])
  const {id} = useParams()

  useEffect(()=>{
   axios.get(`http://localhost:8080/api/products/${id}`).then((res)=>{
    setItem(res.data)
    
   })
  },[])
  
  return (
    <>
    <Helmet>
      <title>
        {item.title}
      </title>
    </Helmet>
    
    <div style={{height:"100vh"}} className='container d-flex justify-content-center align-items-center'>
      <div className='detail__card d-flex' style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <img width={'600px'} src={item.image} alt="" />

     <div className='p-5 d-flex flex-column justify-content-center'> 
    <h1>{item.title}</h1>
    <p>${item.price}</p>
      </div>
      </div>
       
    </div>
    </>
    
  )
}

export default Detail
