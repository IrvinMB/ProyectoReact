import React from 'react';
import Carrusel from '../components/Carrusel/';
import useConexion from '../services/Conexion';
const movies = require('../components/listas/peliculas.json');

function Home() {
	const [elResutlado, elError] = useConexion('movie/now_playing');

	return (
		<div >
			{ elResutlado?
				<Carrusel tipo='movie' elContenido={elResutlado} genero='genre/movie/list'></Carrusel>:null
			}
		</div>
	);
}

export default Home;
