import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ElementoDeDetalle from '../components/Carrusel/Detalle';
import useConexion from '../services/Conexion';
// const movies = require('../components/listas/peliculas.json');

function Detalle(props) {
    const location = useLocation();
    const url = location.state.tipo + '/' + location.state.id;
    const urlvideo = location.state.tipo + '/' + location.state.id + '/videos';
    const urlRecomendaciones = location.state.tipo + '/' + location.state.id + '/recommendations';
    const urlcredits= location.state.tipo+ '/' + location.state.id+'/credits';
    
    
    // const movies = require('../components/listas/peliculas.json');
    const [losDatos, elError] = useConexion(url);
    const [elDetalleAMostrar, setDetalle] = useState(null);
    const [losDatosVideo,errores] = useConexion(urlvideo);
    const [elDetalleVideo, setDetalleVideo] = useState(null);
    const [losDatosRecomendaciones,erroresRecomen] = useConexion(urlRecomendaciones);
    const [elDetalleRecomendaciones, setDetalleRecomen] = useState(null);
    const [losDatosCredits,erroresCredits] = useConexion(urlcredits);
    const [elDetalleCredits, setDetalleCredits] = useState(null);
    useEffect(() => {
        setDetalle(losDatos);  
      
    }, [losDatos])
     useEffect(() => {
        setDetalleVideo(losDatosVideo);
     }, [losDatosVideo])
     useEffect(() => {
        setDetalleRecomen(losDatosRecomendaciones);
     }, [losDatosRecomendaciones])
     useEffect(() => {
        setDetalleCredits(losDatosCredits);
    }, [losDatosCredits])
	return (
        <div className="ContenidoDetalle">
            {(elDetalleVideo&&elDetalleCredits&&elDetalleAMostrar&&elDetalleRecomendaciones)?
                <ElementoDeDetalle elDetalle={elDetalleAMostrar}
                    elDetalleVideo={elDetalleVideo}
                    elDetalleRecomendaciones={elDetalleRecomendaciones}
                    elDetalleCredits={elDetalleCredits}
                ></ElementoDeDetalle>
		    :null}
        </div>
	);
}

export default Detalle;
