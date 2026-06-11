import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <>
       <div className="blog-card">
    <h2 className="blog-title">Jon Jones Defends Title</h2>

    <h4 className="blog-subtitle">
        UFC 350 Main Event Recap
    </h4>

    <p className="blog-description">
        Jon Jones successfully defended his heavyweight championship
        after a dominant five-round performance against his challenger.
    </p>

    <a href="#" className="read-more">Read More</a>
</div>
    </>
  )
}

export default Card