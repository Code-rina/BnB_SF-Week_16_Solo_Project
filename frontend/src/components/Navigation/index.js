import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal'
import DemoUser from './demouser'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <DemoUser />
      </>
    );
  }

  return (
      <nav className='navBar'>
        <div className='left_container'>
          <img id="bnb_sf_logo" src="/bnb_sf_logo_long.png" alt="bnb_sf_logo"></img>
        </div>
        <div className='right_container'>
          <ul>
                <NavLink exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
          </ul>
        </div>
      </nav>  
  );
}

export default Navigation;