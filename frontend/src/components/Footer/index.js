import React from 'react';
import './footer.css';


function Footer(){
    return (
        <div className="footer_container">
                <p id="developer">Developed By: Katerina Kreibich</p>
                <a id="linkedin_icon" href="https://github.com/Code-rina" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                <a id="github_icon" href="https://www.linkedin.com/in/katerina-kreibich-7a79a251/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
    )
}

export default Footer;