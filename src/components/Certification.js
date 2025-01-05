import React from 'react';
import './Certification.css';

const Certification = () => {
     return(
        <section id="certification">
    <div class="container">  <br/> <br/>
        <h2 id="certifyHead"> Certifications </h2>
         <table >
            <table className="certification-table">
                <tr class="eachRow">
                  <th className="cell1">Platform</th>
                  <th className="cell1">Certification</th>
                  <th className="cell1">Issued</th>
                  <th className="cell1"> link </th>
                </tr>
                <tr className="eachRow">
                    <td className="cell">freeCodeCamp</td>
                    <td className="cell">Respnsive Web Design</td>
                    <td className="cell">Feb 2023</td>
                    <td className="cell"> <a href="https://www.freecodecamp.org/certification/fcc7154f771-04b8-4438-9ffd-0a8e88d89038/responsive-web-design"> View Certification </a></td>
                  </tr>
                <tr class="eachRow">
                  <td className="cell">Coursera</td>
                  <td className="cell">Introduction to Web development with HTML, CSS, JavaScript</td>
                  <td className="cell">Feb 2024</td>
                  <td className="cell"> <a href="https://coursera.org/share/49f89b83b7185df2f98bb35f6409fae6"> View Certification </a> </td>
                </tr>
                <tr className="eachRow">
                    <td className="cell">Coursera</td>
                    <td className="cell">Developing frontend apps with React</td>
                    <td className="cell">March 2024</td>
                    <td className="cell"> <a href="https://www.coursera.org/account/accomplishments/verify/XYUQ3XWYBJJW"> View Certification </a></td>
                  </tr>
                <tr className="eachRow">
                  <td className="cell">HackerRank</td>
                  <td className="cell">Java (Basic)</td>
                  <td className="cell">July 2024</td>
                  <td className="cell"> <a href="https://www.hackerrank.com/certificates/f7b26fbdbb8d"> View Certification </a></td>
                </tr>
                <tr className="eachRow">
                  <td className="cell">NPTEL</td>
                  <td className="cell"> Software Engineering </td>
                  <td className="cell">Oct 2024</td>
                  <td className="cell"> <a href="https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs119/Course/NPTEL24CS119S95280165704310643.pdf"> View Certification </a></td>
                </tr>

               
                
              </table>
         </table>
    </div>
</section>
    );
};

export default Certification;