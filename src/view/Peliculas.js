import React from 'react';
import Carrusel from '../components/Carrusel/';
import useConexion from '../services/Conexion';
function Peliculas() {
    const [elResutlado, elError] = useConexion('movie/now_playing');

	return (
		<div >
			{ elResutlado?
				<Carrusel MostrarSoloFavoritos={false}
					tipo='movie'
					elContenido={elResutlado} genero='genre/movie/list'></Carrusel> : null
			}
		</div>
	);
}
export default Peliculas;