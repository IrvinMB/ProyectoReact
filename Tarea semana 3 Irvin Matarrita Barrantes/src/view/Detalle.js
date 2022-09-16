import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import ElementoDeDetalle from '../components/Carrusel/Detalle';
// const movies = require('../components/listas/peliculas.json');

function Detalle(props) {
    const location = useLocation();
    const movies = require('../components/listas/peliculas.json');
    const elDetalleAMostrar = movies.results.find(elElemento => {
        return elElemento.id == location.state.id;
     });
	return (
		<div className="ContenidoDetalle">
			<ElementoDeDetalle elDetalle={elDetalleAMostrar} ></ElementoDeDetalle>
		</div>
	);
}

export default Detalle;
