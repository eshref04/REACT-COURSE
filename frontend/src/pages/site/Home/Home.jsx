import React from 'react'
import "./Home.css"
import HeroSection from '../../../components/HeroSection/HeroSection'
import CardsSection from '../../../components/CardsSection/CardsSection'
import ReviewSection from '../../../components/ReviewSection/ReviewSection'
import { Helmet } from 'react-helmet-async';
import FormSection from '../../../components/FormSection/FormSection'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>
        Home
      </title>
    </Helmet>
      <HeroSection/>
      <CardsSection/>
      <FormSection/>
      {/* <ReviewSection/> */}
    </>
  )
}

export default Home
