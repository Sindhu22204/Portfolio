import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    const handleClick = () => {
        // Redirect to the provided URL when the button is clicked
        window.location.href = 'https://docs.google.com/document/d/1BBTvQeeNqHfTXLIXumEFbO_0ri3gFOV2/edit';
      };
    return (
        <section id="about">
    <div className="row">
    <div className="col-6 " id="helloIm">
       <h1 id="name">Hello I'm Sindhu L</h1> <br/>
       <h3 id="subhead"> Passionate about web development. </h3>
       <p id="note"> I am curious to explore and delve deeper into web development and java development.</p>
        <br/>
        <button onClick={handleClick} id="resumeButton">
            Resume 
        </button>
    </div>
    <div className=" col-3 offset-1" id="myImg">
    <img src="Sindhu.L.png" alt="Sindhu" id="sindhuImg"/>

    </div>
   </div>
</section>
    );
};

export default AboutMe;
