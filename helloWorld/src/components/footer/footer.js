import React from 'react'
import './footer.css'

function Footer() {
  return (
<footer>

<ul className="footer__nav">
<li><a href="/">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#testimonials">Testimonials</a></li>
</ul>

<ul className="footer__contact">
<li>Contact</li>
<li>email: dtpham17@gmail.com</li>
<li>phone: 832-495-6966</li>
<li>fill out form</li>
<li><a href="https://github.com/coder-joe-smoe">github</a></li>
</ul>


<div className="footer__rights__container">

<span className="footer__rights">
All rights reserved. Devin Pham (c)
</span>
</div>
</footer>

  )
}

export default Footer