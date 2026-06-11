import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <>
        <section className="hero">
    <div className="hero-content">
        <h1>THE HOME OF MMA</h1>
        <p>
            Latest MMA news, fight analysis, rankings, fighter profiles,
            and upcoming event coverage.
        </p>

        <div className="hero-buttons">
            <a href="#" className="btn-primary">Latest News</a>
            <a href="#" className="btn-secondary">View Fighters</a>
        </div>
    </div>
</section>
    </>
  )
}

export default Hero