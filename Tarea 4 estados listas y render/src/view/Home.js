import React from 'react';
import Carrusel from '../components/Carrusel/';
import useConexion from '../services/Conexion';
const movies = require('../components/listas/peliculas.json');

function Home() {
	const [elResutlado, elError] = useConexion('movie/now_playing');

	return (
		<div >
			{ elResutlado?
				<Carrusel elContenido={elResutlado}></Carrusel>:null
			}
		</div>
	);
}

export default Home;
