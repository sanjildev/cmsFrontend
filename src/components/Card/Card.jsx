import React from 'react'
import './Card.css'

const Card = ({ blogs }) => {
  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog._id}>
          <h2 className="blog-title">{blog.title}</h2>

          <h4 className="blog-subtitle">
            {blog.subtitle}
          </h4>

          <p className="blog-description">
            {blog.description}
          </p>

          <a href="#" className="read-more">Read More</a>
        </div>
      ))}
    </div>
  )
}

export default Card