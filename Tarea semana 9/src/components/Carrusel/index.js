import React, { useState, useEffect } from 'react';
import Categoria from './Categorias';
import './carrusel.css';
import useConexion from '../../services/Conexion';
import { useSelector, useDispatch } from 'react-redux';
import { getFavorito } from '../favorito/state/favoritoActions';
export default function Carrusel(props) {
	const [elResutlado, elError] = useConexion(props.genero);
	const [losGeneros, setGenero] = useState([]);
	const [laLista, setLista] = useState([]);
	const [laListaCategoria, setListaCategoria] = useState([]);

	const dispatch = useDispatch();
	const elStorage = useSelector((state) => state.losFavoritos.favorito);
	 const loading = useSelector((state) => state.losFavoritos.agrega);
	useEffect(() => {
		dispatch(getFavorito());
	}, [,loading]);
	useEffect(() => {
		//  dispatch(getFavorito());
		setLista(props.elContenido.results);
		if (elResutlado != null) {
			let elArregloDeGeneros = [];
			elResutlado.genres.forEach((elGenero) => {				
				const elNuevoArreglo = {
					id: elGenero.id,
					elNombreDelGenero: elGenero.name,
					laLista: laLista.filter((elElemento) => {
						if (
							elElemento.genre_ids.some(
								(elTituloPorGen) => elTituloPorGen == elGenero.id
							)
						)
							return elElemento;
					}),
				};
				elArregloDeGeneros.push(elNuevoArreglo);
				
			});
			setGenero(elArregloDeGeneros);
		}
	}, [elResutlado, laLista,loading]);
	useEffect(() => {
		EnlisteLosGeneros();
	}, [losGeneros]);
	function EnlisteLosGeneros() {
		const elArrglo = [];
		losGeneros.forEach((elGenero, Key) => {
			if (elGenero.laLista.length > 0) {
				elArrglo.push(
					<div key={elGenero.id + 1+Key}>
						<h1>{elGenero.elNombreDelGenero}</h1>
						<Categoria
							tipo={props.tipo}
							elContenido={elGenero.laLista}
							losFavoritos={elStorage}
							CategoriaId={elGenero.id + 1+elGenero.elNombreDelGenero}
						></Categoria>
						;
					</div>
				);
			}
		});
		setListaCategoria(elArrglo);
	}
	return <div className="contenido">{laListaCategoria}</div>;
}
