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
    <button>Book Now</button>

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

    <h3>Projects</h3>
    <p></p>
    <img src='https://www.itmountain.com'/>
    <img src='/'/>
    <img src='/'/>
    <br />
    <img src='/'/>
    <img src='/'/>
    <img src='/'/>

<h3>Testimonials</h3>
<p></p>



<footer>
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