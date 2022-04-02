import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai"
import './about.css'

function About() {
  return (
<div className="about__container" id="about">

<h3>About
<AiOutlineGlobal />
</h3>
<div className="about__item">
</div>
<div className="about__text">
  <h4 className="about__title">web development</h4>
  <p className="about__desc"></p>
</div>
<div className="about__item">
</div>
<div className="about__text">
  <h4 className="about__title">it</h4>
  <p className="about__desc"></p>
</div>
<div className="about__item">
</div>

<div className="about__text">
  <h4 className="about__title">creating efficient systems</h4>
  <p className="about__desc"></p>
  <div className="about__item">
  </div>
</div>
  <div className="about__text">
  <h4 className="about__title">writing - technical writing, copywriting</h4>
  <p className="about__desc"></p>
  <div className="about__item">
  </div> 
</div>
</div>


  )
}

export default About