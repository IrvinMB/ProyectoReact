import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ElementoDeDetalle from '../components/Carrusel/Detalle';
import useConexion from '../services/Conexion';
// const movies = require('../components/listas/peliculas.json');

function Detalle(props) {
    const location = useLocation();
    const url = location.state.tipo + '/' + location.state.id;
    // const movies = require('../components/listas/peliculas.json');
    const [losDatos, elError] = useConexion(url);
    const [elDetalleAMostrar,setDetalle] = useState(null);
    useEffect(() => {
        setDetalle(losDatos);
    }, [losDatos])
 
	return (
        <div className="ContenidoDetalle">
            {elDetalleAMostrar?
			<ElementoDeDetalle elDetalle={elDetalleAMostrar} ></ElementoDeDetalle>
		    :null}
        </div>
	);
}

export default Detalle;
