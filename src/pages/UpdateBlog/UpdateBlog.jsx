import React, { useEffect, useState } from 'react'
import './UpdateBlog.css'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const UpdateBlog = () => {
    const {id}=useParams()
  const [singleBlog,setSingleBlog]=useState({})
const navigate=useNavigate()
  const handleChange=(e)=>{
const {name,value}=e.target
setSingleBlog({
  ...singleBlog,[name]:value
})
  }
const fetchSingleBlog=async()=>{
const response=await axios.get(`http://localhost:3000/singleBlog/${id}`)
if(response.status==200){
setSingleBlog(response.data.blog)
}
  }

  const keyToExclude=['createdAt','updatedAt']
  keyToExclude.forEach((key)=>{
    delete singleBlog[key]
  })
const updateBlog=async(e)=>{
e.preventDefault()
const response=await axios.patch(`http://localhost:3000/editblog/${id}`,singleBlog)
if(response.status==200){
navigate(`/singleblog/${id}`)
}
}
        useEffect(()=>{
  fetchSingleBlog()
        },[])
  return (
   
    <>
    <Navbar/>
      <form className="blog-form" onSubmit={updateBlog}>
    
    <h2>Update MMA Blog</h2>

    <input onChange={handleChange}
        type="text" value={singleBlog.title}
        placeholder="Enter Blog Title"
       className="form-input"
    name='title' required/>

    <input
        type="text" value={singleBlog.subtitle}
         onChange={handleChange}
        placeholder="Enter Blog Subtitle"
       className="form-input"
        name='subtitle'
    required/>

    <textarea
        placeholder="Enter Blog Description"
         onChange={handleChange}
       className="form-textarea"
        rows="8" value={singleBlog.description}
         name='description'
     required></textarea>

    <button type="submit"className="submit-btn">
        Update Blog
    </button>

</form>
    </>
  )
}

export default UpdateBlog