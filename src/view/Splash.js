import React from 'react';
import { Navigate  } from 'react-router-dom';
import '../style/Splash.css'

function Splash() {
    setTimeout(() => {
      // <Navigate  to='/home'  />
      }, 4000);
        let logo= "./logo.ico";
        return (
          <div className="body">
                  <img src={logo} className="logo" alt="logo" />
          </div>
        );      
}

export default Splash;