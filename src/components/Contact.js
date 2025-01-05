import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
    <h2 id="contactHead">ContactMe</h2> 
    <div className="icon-container">
        <a href="https://www.linkedin.com/in/sindhu-l-6a689b231/" rel="noopener noreferrer" target="_blank" title="LinkedIn" >
          <i id="linkdin" className="fab fa-linkedin"></i>
        </a>
        
        <a href="https://github.com/Sindhu22204" target="_blank" title="GitHub" rel="noopener noreferrer">
          <i id="github" className="fab fa-github"></i>
        </a>
      </div>
      
</section>
    );
};

export default Contact;
