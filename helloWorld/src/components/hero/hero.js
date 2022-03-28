import React from 'react'
import hero from './../../images/iStock-1180187740-1536x1024.jpg'
import './../../components/hero/hero.css'

function Hero() {
  return (
    <div className="hero__container">
<img 
className="hero__img" 
src={hero} alt="" />
    <div className="hero__text">
      <h2 className="hero__title">
            I am Devin Pham
      </h2>
      <p className="hero__desc">
            Web Developer
      </p>
      
    <a href="#about">
        <button className="hero__btn">
        Learn More
        </button>
    </a>
    </div>
</div>
  )
}

export default Hero