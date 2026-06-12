import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ blogs }) => {
  return (
    <div className="blog-container">
      {blogs.map((blog) => {
        return(
        <div className="blog-card" key={blog._id}>
          <h2 className="blog-title">{blog.title}</h2>

          <h4 className="blog-subtitle">
            {blog.subtitle}
          </h4>

          <p className="blog-description">
            {blog.description}
          </p>

          <Link to={`/singleBlog/${blog._id}`} className="read-more">Read More</Link>
        </div>
      )})}
    </div>
  )
}

export default Card