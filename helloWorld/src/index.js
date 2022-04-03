import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import 'sans-serif/src/sans-serif.css';

import Hero from './/components/hero/hero'
import About from './/components/about/about'
import Footer from './/components/footer/footer'


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


<Footer />



    </div>



  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 3000);