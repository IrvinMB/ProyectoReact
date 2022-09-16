import React from 'react';
import './detalle.css';
export default function ElementoDeDetalle(props) {
	const losDatos = props.elDetalle;
	console.log(losDatos);
	let background = 'https://image.tmdb.org/t/p/w500' + losDatos.backdrop_path;
	let imagen = 'https://image.tmdb.org/t/p/w200' + losDatos.poster_path;
	let key = losDatos.Id;

	return (
		<div className="ContenidoDetalle">
			<div className="card" style={{ backgroundImage: `url(${background})` }}>
				<img className="imagenPerfilDeDetalle" src={imagen} id={key} />
				<h1 className="tituloDetalle">{losDatos.title}</h1>
				<h2>Descripción</h2>
				<p>{losDatos.overview}</p>
			</div>
		</div>
	);
}
