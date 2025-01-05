import React from 'react';
import './Projects.css';

const Projects = () => {
  const handleProjectClick = (url) => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <section id="projects">
      <h2 id="projHead"> Projects </h2> <br /> <br />
      <div className="container">
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4">
            <div
              className="project-box"
              onClick={() => handleProjectClick('https://eyecare-chatbot.000webhostapp.com/')}
            >
              <h3>AI Eyecare Chatbot</h3>
              <p>
                Developed an AI chatbot for eyecare assistance. Created an interactive frontend of the webpage using HTML, CSS, and Bootstrap.
              </p>
            </div>
          </div>
          {/* Project 2 */}
          <div className="col-md-4">
            <div className="project-box" onClick={() => handleProjectClick('')}>
              <h3>My Portfolio</h3>
              <p>
                Created this portfolio using HTML, CSS, Bootstrap, and JavaScript, where I showcased information about myself, my skills, and projects.
              </p>
            </div>
          </div>
          {/* Project 3 */}
          <div className="col-md-4">
            <div
              className="project-box"
              onClick={() => handleProjectClick('https://github.com/Sindhu22204/ATMsimulation')}
            >
              <h3>ATM Simulation</h3>
              <p>
                Built an ATM simulation mini project using JDBC and swing concepts. Where withdraw, deposit, and balance enquiry operations were performed.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row with 2 Projects */}
        <div className="row">
          {/* Project 4 */}
          <div className="col-md-4">
            <div
              className="project-box"
              onClick={() => handleProjectClick('https://sindhu22204.github.io/photography-web/')}
            >
              <h3>Photography Webpage</h3>
              <p>
              Created a simple Photography web page that showcases dog photography using CSS Grid System, HTML and JavaScript. Implemented interactive elements such as image sliders to enhance UX.
              </p>
            </div>
          </div>

          {/* Project 5 */}
          <div className="col-md-4">
            <div
              className="project-box"
              onClick={() => handleProjectClick('https://github.com/Sindhu22204/ATMsimulation')}
            >
              <h3>Cloud Security Using Deep Learning</h3>
              <p>
                Project uses ANN to detect insider threats. The model identifies suspicious behavior, providing real-time protection against exfiltration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
