import { React } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Peliculas from './Peliculas';
import Series from './Series';
import Favoritos from "./Favoritos";
import "../style/Menu.css";
function Menu() {
    return (
        <>           
            <nav className="menu">
                <ul>
                    <li><img src="./images/icon.png" className="logo" alt="logo" /> </li>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/peliculas">Peliculas</Link>
                    </li>
                    <li>
                        <Link to="/series">Series</Link>
                    </li>
                    <li>
                        <Link to="/favoritos">Favoritos</Link>
                    </li>
                </ul>
            </nav>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/peliculas" element={<Peliculas />} />
                    <Route path="/series" element={<Series />} />
                    <Route path="/favoritos" element={<Favoritos />} />       
                </Routes>
            </div>  
        </>
    );
}
export default Menu;