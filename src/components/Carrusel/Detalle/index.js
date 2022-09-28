import React from 'react';
import ReactPlayer from 'react-player'
import './detalle.css';
export default function ElementoDeDetalle(props) {
	const losDatos = props.elDetalle;
	let background = 'https://image.tmdb.org/t/p/w500' + losDatos.backdrop_path;
	let imagen = 'https://image.tmdb.org/t/p/w200' + losDatos.poster_path;
	let key = losDatos.Id;
	let video = props.elDetalleVideo?.results[0]?.key;
	let cretitos = props.elDetalleCredits;
	console.log(cretitos.cast);
	return (
			<div className="card" style={{ backgroundImage: `url(${background})` }}>
				<img className="imagenPerfilDeDetalle" src={imagen} id={key} />
				<h1 className="tituloDetalle">{losDatos.title}</h1>
				<h2>Descripción</h2>
			<p>{losDatos.overview}</p>
			<div className='cast'>
				<div className='contenidoCast'>
				<ul>
				{cretitos.cast.map(({ name, profile_path }) => {
					return (
						<li className="item">
							<img className="imagenDeCarrusel" src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
							<h2>{name}</h2>
						</li>)
					
				})			
					}
					</ul>
				</div>
			</div>
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
	);
}
