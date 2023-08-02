import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const LogoutButton = () => {
    const {store , actions} = useContext(Context)
    const [isLoggedIn, setIsLoggedIn]  = useState(false);
    const token = localStorage.getItem("token")


    useEffect(() => {
        if (store.isLogged == false) {
            return setIsLoggedIn(false)
        }
        else if (store.isLogged) {
          return setIsLoggedIn(true);
        }
    },[])

  const handleLogout = () => {

    localStorage.removeItem('token');
    actions.setLoggedOut()
    setIsLoggedIn(false);
  };



  return (
    <div>
      <Link to='/'>
        <button className='btn btn-danger' onClick={handleLogout}>
          Logout
        </button>
      </Link>
    </div>
  );
};

export default LogoutButton;
