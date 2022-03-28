import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai"
import './about.css'

function About() {
  return (
<div className="about__container" id="about">

<h3>About
<AiOutlineGlobal />
</h3>
<p>This is where I'm going say my strengths</p>
<ul>
<li>web development</li>
<li>it</li>
<li>creating efficient systems</li>
<li>writing - technical writing, copywriting</li>
</ul>
</div>
  )
}

export default About