import React, { useEffect, useState } from 'react'
import './SingleBlog.css'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const SingleBlog = () => {
  const navigate=useNavigate()
      const {id}=useParams()
  const [singleBlog,setSingleBlog]=useState({})
const fetchSingleBlog=async()=>{
const response=await axios.get(`http://localhost:3000/singleBlog/${id}`)
if(response.status==200){
setSingleBlog(response.data.blog)
}
  }

  const deleteSingleBlog=async()=>{
    const response=await axios.delete(`http://localhost:3000/deleteBlog/${id}`)
    if(response.status==200){
      alert("Blog Deleted Successfully!!")
      navigate('/')
    }
    else{
      alert('No blog to be deleted !!')
    }
}
  
      useEffect(()=>{
fetchSingleBlog()
      },[])
  return (

    <>
    <Navbar/>
     <div className="single-blog">

    <h1 className="blog-title">
      {singleBlog.title}
    </h1>

    <h3 className="blog-subtitle">
        {singleBlog.subtitle}
    </h3>

    <div className="blog-content">
        <p>
{singleBlog.description}
        </p>

    </div>
<a onClick={deleteSingleBlog} className="btn">Delete Blog</a>
</div> 
    </>
  )
}

export default SingleBlog