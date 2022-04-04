import React from 'react'
import './footer.css'

function Footer() {
  return (
<footer>

<ul className="footer__nav">
<li>Home</li>
<li>About</li>
<li>Services</li>
<li>Projects</li>
<li>Testimonials</li>
</ul>

<ul className="footer__contact">
<li>Contact</li>
<li>email: dtpham17@gmail.com</li>
<li>phone: 832-495-6966</li>
<li>fill out form</li>
<li></li>
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