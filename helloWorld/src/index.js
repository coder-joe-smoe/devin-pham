import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import 'sans-serif/src/sans-serif.css';

import Hero from './/components/hero/hero.js'
import About from './/components/about/about'

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));



function tick() {
  const element = (
    <div>
    <div className="navbar">
      <h1>Logo - Nav</h1>
    </div>

<Hero />
<About />

    <h3>Services</h3>
    <ul>
      <li>copywriting</li>
      <li>website creation</li>
      <li></li>
    </ul>

    <h3>Projects</h3>
    <p></p>
    <img src='https://www.itmountain.com' alt=""/>
    <img src='/' alt="" />
    <img src='/' alt="" />
    <br />
    <img src='/' alt="" />
    <img src='/' alt="" />
    <img src='/' alt="" />

<h3>Testimonials</h3>
<p></p>



<footer>
<h3>Footer</h3>
<ul className="col-4-md">
<li>Home</li>
<li>About</li>
<li>Services</li>
<li>Projects</li>
<li>Testimonials</li>
</ul>

<ul className="col-4-md">
<li>Contact</li>
<li>email: dtpham17@gmail.com</li>
<li>phone: 832-495-6966</li>
<li>fill out form</li>

</ul>


</footer>


    </div>



  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 3000);