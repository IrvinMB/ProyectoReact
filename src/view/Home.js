import React, { Component } from 'react';
import Carrusel from '../components/Carrusel/';
const movies = require('../components/listas/peliculas.json');

function Home() {
	return (
		<div className="app">
			<Carrusel elContenido={movies}></Carrusel>
		</div>
	);
}

export default Home;
