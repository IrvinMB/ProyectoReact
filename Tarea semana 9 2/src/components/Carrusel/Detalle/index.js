import React from 'react';
import ReactPlayer from 'react-player'
import './detalle.css';
export default function ElementoDeDetalle(props) {
	const losDatos = props.elDetalle;
	let background = 'https://image.tmdb.org/t/p/w500' + losDatos.backdrop_path;
	let imagen = 'https://image.tmdb.org/t/p/w200' + losDatos.poster_path;
	let key = losDatos.Id;
	let video = props.elDetalleVideo?.results[0].key;
	console.log(video);
	return (
		<div className="ContenidoDetalle">
			<div className="card" style={{ backgroundImage: `url(${background})` }}>
				<img className="imagenPerfilDeDetalle" src={imagen} id={key} />
				<h1 className="tituloDetalle">{losDatos.title}</h1>
				<h2>Descripción</h2>
				<p>{losDatos.overview}</p>
				<div className="video">
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${video}`}
					className='react-player'
					playing
					width='100%'
					height='100%'
					/>
					</div>
			</div>
		</div>
	);
}
