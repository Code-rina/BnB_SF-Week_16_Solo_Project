import React from 'react';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import './footer.css';


function Footer(){
//   const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="footer_container">
                <p id="developer">Developed By: Katerina Kreibich</p>
                <a id="linkedin_icon" href="https://www.linkedin.com/in/katerina-kreibich-7a79a251/"><i class="fab fa-github-square"></i></a>
                <a id="github_icon" href="https://github.com/Code-rina"><i class="fab fa-linkedin"></i></a>
        </div>
    )
}

export default Footer;