import React from 'react';
import { useNavigate } from 'react-router-dom';
import './item.css';
export default function Item(props) {
	let navegacion = useNavigate();
	const mostrarDetalle = (id) => {
		navegacion('/detalle/'+id ,{state:{id:id}});
	};
	let imagen = 'https://image.tmdb.org/t/p/w200' + props.Imagen;
	let key = props.Id;
	console.log(imagen);
	return (
		<div className="item" onClick={() => mostrarDetalle(key)}>
			<img className="imagenDeCarrusel" src={imagen} id={key} />
		</div>
	);
}
