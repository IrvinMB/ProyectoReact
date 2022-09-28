import React from 'react';
import { useNavigate } from 'react-router-dom';
import './item.css';
import IconFavorito from '../Icons/favorito';
import IconNoFavorito from '../Icons/noFavorito';
import { useDispatch}  from 'react-redux';
import { insertFavorito,getFavorito,eliminaFavorito } from '../../favorito/state/favoritoActions';
export default function Item(props) {
	let navegacion = useNavigate();
	const mostrarDetalle = (id) => {
		navegacion('/detalle/' + id, { state: { id: id, tipo: props.tipo } });
	};

	let imagen = 'https://image.tmdb.org/t/p/w200' + props.Imagen;
	let key = props.Id;
	// console.log(imagen);
	const dispatch = useDispatch();

	const agregarFavorito = (losDatos) => {
		dispatch(insertFavorito(losDatos));  
	};
	const eliminarFavorito = (losDatos) => {
		dispatch(eliminaFavorito(losDatos));  
	};
	return (
		<div className="item" >
			{props.esFavorito ? (
				<a onClick={() => { eliminarFavorito({ id: props.idFavorito })}}>
					<IconFavorito />
				</a>
			) : (
					<a onClick={() => { agregarFavorito({ id: key, tipo: props.tipo }) }}>
					<IconNoFavorito />
				</a>
			)}
			<a onClick={() => {  mostrarDetalle(key) }}>
				<img className="imagenDeCarrusel" src={imagen} id={key} />
			</a>
		</div>
	);
}
