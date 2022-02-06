import React from 'react';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import './home.css';

function Home(){
//   const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="main_container">
            <div className="first_photo_container">
                <img id="sf_view" src="https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20180602_USP001_0.jpg" alt="sf_city_logo"></img>
            </div>
        </div>
    )
}

export default Home;