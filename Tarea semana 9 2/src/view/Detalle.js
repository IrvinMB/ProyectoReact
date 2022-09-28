import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ElementoDeDetalle from '../components/Carrusel/Detalle';
import useConexion from '../services/Conexion';
// const movies = require('../components/listas/peliculas.json');

function Detalle(props) {
    const location = useLocation();
    const url = location.state.tipo + '/' + location.state.id;

    const urlvideo = location.state.tipo + '/' + location.state.id+'/videos';
    // const movies = require('../components/listas/peliculas.json');
    const [losDatos, elError] = useConexion(url);
    const [elDetalleAMostrar, setDetalle] = useState(null);
    const [losDatosVideo,errores] = useConexion(urlvideo);
    const [elDetalleVideo, setDetalleVideo] = useState(null);
    useEffect(() => {
        setDetalle(losDatos);  
      
    }, [losDatos])
     useEffect(() => {
        setDetalleVideo(losDatosVideo);
    }, [losDatosVideo])
	return (
        <div className="ContenidoDetalle">
            {(elDetalleVideo)?
			<ElementoDeDetalle elDetalle={elDetalleAMostrar} elDetalleVideo={elDetalleVideo}></ElementoDeDetalle>
		    :null}
        </div>
	);
}

export default Detalle;
