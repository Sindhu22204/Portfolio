import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            
            <nav id="navgate">
                <a href="#about" className="aa">   AboutMe </a>
                <a href="#skills" className="aa"> Skills </a>
                <a href="#projects" className="aa"> Projects </a>
                <a href="#certification" className="aa"> Certifications </a>
                <a href="#contact" className="aa"> Contact </a>
            </nav>
        </header>
    );
};

export default Header;
