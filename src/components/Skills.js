import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        
<section id="skills">
    <h2 id="skillsHead">Skills</h2>  
    <div className="skills-container">
        <div className="skill-category row">
            <h5 className="skillHeader col-1">Programming Languages:</h5>
            <div className="skill-item offset-1  col-1">
                <i className="fab fa-java"></i>
                <p>Java</p>
            </div>
            <div className="skill-item offset-1 col-1">
                <i className="fa fa-code"></i>
                <p> C </p>
            </div>
            <div className="skill-item offset-1 col-1">
                <i className="fa fa-code"></i>
                <p>C++</p>
            </div>
            <div className="skill-item offset-1 col-1">
                <i className="fab fa-python"></i>
                <p>Python</p>
            </div>
        </div>

        <div className="skill-category row">
            <h5 className="skillHeader  col-1">Frontend Technologies:</h5>
            <div className="skill-item offset-1 col-1">
                <i className="fab fa-react "></i>
                <p>React.js</p>
            </div>
        </div>

        <div className="skill-category row">
            <h5 className="skillHeader col-1">Backend Technologies:</h5>
            <div className="skill-item offset-1 col-1">
                <i className="fab fa-node"></i>
                <p>Node.js</p>
            </div>
        </div>

        <div className="skill-category row">
            <h5 className="skillHeader col-1">Database:</h5>
            <div className="skill-item offset-1 col-1">
                <i className="fas fa-database"></i>
                <p>MySQL</p>
            </div>
            <div className="skill-item offset-1 col-1">
                <i className="fas fa-database"></i>
                <p>MongoDB</p>
            </div>
        </div>

        <div className="skill-category row">
            <h5 className="skillHeader col-1">Version Control System:</h5>
            <div className="skill-item offset-1 col-1">
                <i className="fab fa-github"></i>
                <p>GitHub</p>
            </div>
        </div>

        <div className="skill-category row">
            <h5 className="skillHeader col-1">Data Analysis:</h5>
            <div className="skill-item offset-1 col-1">
                <i className="fas fa-chart-line"></i>
                <p>R Programming</p>
            </div>
        </div>

        <div className="skill-category row">
            <h5 className="skillHeader col-1">Cloud Computing:</h5>
            <div className="skill-item offset-1 col-1">
                <i className="fas fa-cloud"></i>
                <p>Cloud Computing</p>
            </div>
        </div>
    </div>
</section>
    );
};

export default Skills;
