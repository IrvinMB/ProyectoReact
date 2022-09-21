import React from 'react';
import Item from './Item';
import './carrusel.css';
export default function Carrusel(props) {
	console.log(props.elContenido);
	// const elContenido = this.props.elContenido;
	// console.log(this.props);
	let losItemos = [];
	props.elContenido.results.forEach((elElemento) => {
		losItemos.push(
			<Item
				Imagen={elElemento.poster_path}
				Id={elElemento.id}
				key={elElemento.id}
			/>
		);
	});

	return <div className="contenido">{losItemos}</div>;
}
