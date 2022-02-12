import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="icon" onClick={openMenu}>
        <i className="far fa-user-circle"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
          {/* <li>
          </li> */}
            <button id="logout_button" onClick={logout}>Log Out</button>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;