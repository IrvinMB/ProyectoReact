import React from 'react';
import Categoria from './Categorias';
import './carrusel.css';
export default function Carrusel(props) {
	const lasCategorias = props.elContenido.results.reduce((group, titulo) => {
		const { genre_ids } = titulo;
		group[genre_ids] = group[genre_ids] ?? [];
		group[genre_ids].push(titulo);
		return group;
	  }, {});
	// const lasCategorias = reduce(({ genre_ids }) => genre_ids);
	console.log(lasCategorias);
	return (
		<div className="contenido">
			<Categoria elContenido={props.elContenido}></Categoria>	
			{/* <Categoria elContenido={props.elContenido}></Categoria>	 */}

		</div>
	);
}
