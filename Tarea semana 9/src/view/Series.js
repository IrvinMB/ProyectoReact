import React from 'react';
import Carrusel from '../components/Carrusel/';
import useConexion from '../services/Conexion';
function Series() {
	const [elResutlado, elError] = useConexion('tv/on_the_air');

	return (
		<div >
			{ elResutlado?
				<Carrusel  tipo='tv' elContenido={elResutlado} genero='genre/tv/list'></Carrusel>:null
			}
		</div>
	);
}
export default Series;
