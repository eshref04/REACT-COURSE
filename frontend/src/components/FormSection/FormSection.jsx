import React from 'react'
import "./FormSection.css"

const FormSection = () => {
  return (
    <section style={{width:"100%"}} className='form__section d-flex'>
       <div style={{width:"50%",backgroundColor:"#FFB606",padding:"150px 0px",color:"white"}}  className='form__section__left d-flex flex-column align-items-center'>
         <h1>Register now and get a discount <br /> <span className='text-dark'>50%</span>  discount until 1 January</h1>
         <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor <br /> nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. <br /> Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
         <button>REGISTER NOW</button>
       </div>

       <div style={{width:"50%",padding:"150px 0px"}} className='form__section__right d-flex flex-column align-items-center justify-content-center gap-5'>
       <h1>Search for your course</h1>
       <div style={{width:"520px"}} className='d-flex flex-column gap-4 form__section__right__inp'>
       <input type="text" placeholder='Course Name' />
       <input type="text" placeholder='Category' />
       <input type="text" placeholder='Degree' />
       <button type='submit'>SEARCH COURSE</button>
       </div>
      
       </div>
    </section>
  )
}

export default FormSection
