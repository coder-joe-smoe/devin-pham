import ReactDOM from 'react-dom'
import react from 'react'

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));



function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    
    <h3>
      I am Devin Pham
    </h3>
    <p>
      Web Developer
    </p>
    <button>Learn More</button>

    <h3>About</h3>
    <p>This is where I'm going say my strengths</p>
    <ul>
    <li>web development</li>
    <li>it</li>
    <li>creating efficient systems</li>
    <li>writing - technical writing, copywriting</li>
    </ul>

    <h3>Services</h3>
    <ul>
      <li>copywriting</li>
      <li>website creation</li>
      <li></li>
    </ul>

<h3></h3>

    </div>



  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);