import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
        <footer class="footer">
    <div class="footer-content">
        <h2>MMA HUB</h2>

        <p>
            Your source for MMA news, fighter rankings,
            event coverage, and fight analysis.
        </p>

        <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/fighters">Fighters</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>

        <p class="copyright">
            © 2026 MMA HUB. All Rights Reserved.
        </p>
    </div>
</footer>
    </>
  )
}

export default Footer