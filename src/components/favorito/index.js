import React from 'react';
import Carrusel from '../Carrusel/';
import useConexion from '../../services/Conexion';
function Favorito() {
    const [elResutlado, elError] = useConexion('movie/now_playing');

	return (
		<div >
			{ elResutlado?
				<Carrusel  tipo='movie' elContenido={elResutlado} genero='genre/movie/list'></Carrusel>:null
			}
		</div>
	);
}
export default Favorito;