import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Rama Store. All rights reserved.</p>
      </div>
    </footer>
  )
}
