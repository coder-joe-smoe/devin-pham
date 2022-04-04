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

    <h3>Services</h3>
    <ul>
      <li>Copywriting</li>
      <li>Website</li>
      <li>Barbering</li>
    </ul>

<Projects />



<h3>Testimonials</h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt tempora quam nostrum perspiciatis provident pariatur fugit perferendis quasi quos illo.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt tempora quam nostrum perspiciatis provident pariatur fugit perferendis quasi quos illo.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt tempora quam nostrum perspiciatis provident pariatur fugit perferendis quasi quos illo.</p>


<Footer />

    </div>



  );
  ReactDOM.render(element, document.getElementById('root'));
}

mainPage();