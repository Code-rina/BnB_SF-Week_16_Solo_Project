import React from 'react';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';


function Home(){
//   const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="main_container">
            <div className="first_photo_container">
                <img id="sf_view" src="https://www.outfrontmedia.com/-/media/images/ofm/markets/san-francisco/san-francisco-hero.jpg" alt="sf_view"></img>
                    <div className="not_sure_where">Not sure where to stay at? Perfect.</div>
                    <div className="im_flex_container">
                        <Link to="/spots">
                            <button className="im_flex_button">I'm flexible</button>
                        </Link>
                    </div>
            </div>
            <div className="second_photo_container">
                <img id="painted_ladies" src="https://cdn11.bigcommerce.com/s-do0ookap9x/images/stencil/original/products/28280/43524/68269_main__10992.1629750495.jpg?c=2" alt="painted_ladies"></img>
            </div>
            <div className="third_photo_container">
                <img id="gg_bridge" src="https://images.unsplash.com/photo-1475947175089-3a98ee67944b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNhbiUyMGZyYW5jaXNjb3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="gg_bridge"></img>
                    <div className="hosting_question">Questions about hosting?</div>
                    <div className="become_host_container">
                        <Link to="/spots/host">
                            <button className="become_host_button">Become a Host</button>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default Home;