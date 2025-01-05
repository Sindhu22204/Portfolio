import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
    return (
        <div id="body">
            <Header />
            <AboutMe /> 
            <Skills />
            <Projects />
            <Certification />
            <Contact />
        </div>
    );
};

export default App;
