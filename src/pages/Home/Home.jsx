import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Card from '../../components/Card/Card'
import Footer from '../Footer/Footer'
const Home = () => {

    const [blogs,setBlogs]=useState([])
  
   const fetchBlogs=async()=>{

    const response=await axios.get('http://localhost:3000/blogs')   
    setBlogs(response.data.blogs)
    

  
    } 
   

    useEffect(()=>{
fetchBlogs()
    },[])
  return (
   <>
    <Navbar/>
    <Hero/>
    <Card blogs={blogs}/>
    <Footer/>
   </>
  )
}

export default Home