import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import 'sans-serif/src/sans-serif.css';

import Hero from './/components/hero/hero'
import About from './/components/about/about'
import Footer from './/components/footer/footer'
import Projects from './/components/projects/projects'


// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));



function mainPage() {
  const element = (
    <div>
    <div className="navbar">
      <h1>Logo - Nav</h1>
    </div>

<Hero />
<About />

<div className="services" id="services">

    <h3>Services</h3>
    <ul>
      <li>Copywriting</li>
      <li>Website</li>
      <li>Barbering</li>
    </ul>
</div>

<Projects />


<div className="testimonials" id="testimonials">
<h3>Testimonials</h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt tempora quam nostrum perspiciatis provident pariatur fugit perferendis quasi quos illo.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt tempora quam nostrum perspiciatis provident pariatur fugit perferendis quasi quos illo.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt tempora quam nostrum perspiciatis provident pariatur fugit perferendis quasi quos illo.</p>
</div>

<div className="contact">
  <h3>Contact</h3>
  <label htmlFor="name">Name</label>
  <input type="text" name="name" id="name" />
  <label htmlFor="services">Services</label>
  <input type="color" name="color" id="color" />
</div>


<Footer />

    </div>



  );
  ReactDOM.render(element, document.getElementById('root'));
}

mainPage();