import {React} from 'react';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Peliculas from "../view/Peliculas";
import Series from "../view/Series";
import '../style/Home.css';
function Home() {
     let logo= "./images/logo 152.png";
  return (
    <div>
      <header>
          <img src={logo} className="logo" alt="logo" />
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/peliculas">Peliculas</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
        </ul>
      </nav>  
      <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/peliculas" element={<Peliculas />} />
             <Route path="/seires" element={<Series />} />
      </Routes >    
    </div>
  );  
 
}

export default Home;