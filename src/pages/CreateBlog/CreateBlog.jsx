import React, { useState } from 'react'
import './CreateBlog.css'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CreateBlog = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({
    title:'',
    subtitle:'',
    description:''
  })

const handleChange=(e)=>{
const {name,value}=e.target
setData({
 ...data,
 [name]:value 
})
}

const createBlog=async(e)=>{
e.preventDefault()
const response=await axios.post('http://localhost:3000/createBlog',data)
if (response.status==201) {
 alert('Blog created successfully') 
 navigate('/')
}
else{
  alert('Something went wrong !!')
}
  }



  return (
    <>
    <Navbar/>
      <form className="blog-form" onSubmit={createBlog}>
    
    <h2>Create MMA Blog</h2>

    <input
        type="text"
        placeholder="Enter Blog Title"
       className="form-input"
    name='title' onChange={handleChange} required/>

    <input
        type="text"
        placeholder="Enter Blog Subtitle"
       className="form-input"
        name='subtitle' onChange={handleChange}
    required/>

    <textarea
        placeholder="Enter Blog Description"
       className="form-textarea"
        rows="8"
         name='description' onChange={handleChange}
     required></textarea>

    <button type="submit"className="submit-btn">
        Publish Blog
    </button>

</form>
    </>
  )
}

export default CreateBlog