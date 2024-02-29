import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import "../../styles/navbar.css";


const LogoutButton = () => {
  const { store, actions } = useContext(Context)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token")


  useEffect(() => {
    if (store.isLogged == false) {
      return setIsLoggedIn(false)
    }
    else if (store.isLogged) {
      return setIsLoggedIn(true);
    }
  }, [])

  const handleLogout = () => {

    localStorage.removeItem('token');
    actions.setLoggedOut()
    setIsLoggedIn(false);
  };



  return (
    <div>
      <button className='logout' style={{ marginRight: '10px' }}>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleLogout}>
          <i className="fa-solid fa-power-off"></i>
        </Link>
      </button>
    </div >
  );
};

export default LogoutButton;
