import React, { useState, useEffect } from 'react';
import Categoria from './Categorias';
import './carrusel.css';
import useConexion from '../../services/Conexion';
export default function Carrusel(props) {
	const [elResutlado, elError] = useConexion(props.genero);
	const [losGeneros, setGenero] = useState([]);
	const [laLista, setLista] = useState([]);
	const [laListaCategoria, setListaCategoria] = useState([]);

	useEffect(() => {
		setLista(props.elContenido.results);
		if (elResutlado != null) {
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
				setGenero((elGenero) => [...elGenero, elNuevoArreglo]);
			});
		}
	}, [elResutlado, laLista]);
	useEffect(() => {
		EnlisteLosGeneros();
	}, [losGeneros]);
	function EnlisteLosGeneros() {
		const elArrglo = [];
		losGeneros.forEach((elGenero, Key) => {
			if (elGenero.laLista.length > 0) {
				elArrglo.push(
					<div key={elGenero.id + 1}>
						<h1>{elGenero.elNombreDelGenero}</h1>
						<Categoria tipo={props.tipo} elContenido={elGenero.laLista}></Categoria>;
					</div>
				);
			}
		});
		setListaCategoria(elArrglo);
	}
	return <div className="contenido">{laListaCategoria}</div>;
}
