import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Card from '../../components/Card/Card'
const Home = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <Card/>
   </>
  )
}

export default Home