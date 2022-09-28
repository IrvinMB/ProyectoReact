import React, { useState, useRef, useEffect } from 'react';
import Item from '../Item';
import './categorias.css';
import IconFlechaIzquierda from '../Icons/IconFlechaIzquierda';
import IconFlechaDerecha from '../Icons/IconFlechaDerecha';

export default function Categoria(props) {
	// const elContenido = this.props.elContenido;
	// console.log(this.props);
	const PADDINGS = 100;
	const contenidoLista = useRef(null);
	const contenidoCompleto = useRef(null);
	const [containerWidth, setContainerWidth] = useState(0);
	const [losFavoritos, setFavoritos] = useState([]);
	const [laPosicion, setPosicion] = useState(0);
	const [losTitulos, setLosTitulos] = useState([]);
	const slideProps = {
		style: { transform: `translateX(${laPosicion}px)` },
	};
	// const laTransformacion = {style:'transform: "translateX('+laPosicion+')"'};
	// 
	// useEffect(() => {
	//     const containerWidth = contenidoLista.current.clientWidth - PADDINGS;
	//     setContainerWidth(containerWidth);
	//   }, [contenidoLista.current]);
	useEffect(() => {
		setFavoritos(props.losFavoritos);
	  }, [props.losFavoritos]);
	let esFavorito = true;
	useEffect(() => {
		let losItems = [];
		props.elContenido.forEach((elElemento, key) => {
			let elIdFavorito = 0;
			esFavorito = losFavoritos.some(({ id,identificador }) => {	
				if (identificador == elElemento.id) { 
					elIdFavorito = id;
					return true;
				}				
			});	
			losItems.push(<Item
				Imagen={elElemento.poster_path}
				Id={elElemento.id}
				key={key + '-' + props.tipo + '-' + elElemento.id + '-' + props.CategoriaId}
				tipo={props.tipo}
				esFavorito={esFavorito}
				idFavorito={ elIdFavorito}
			/>)
			setLosTitulos(losItems)
			
		});
	}, [losFavoritos]);
	const muevaLaListaIzquierda = () => {
		if (laPosicion != 0) setPosicion(laPosicion + 150);
	};
	const muevaLaListaDerecha = () => {
		setPosicion(laPosicion - 150);
	};
	return (
		<div className="Categoria" ref={contenidoCompleto}>
			<div className="flechaIzquierda" onClick={muevaLaListaIzquierda}>
				<IconFlechaIzquierda></IconFlechaIzquierda>
			</div>
			<ul className="ItemsDeCategoria">
				<li className="items" {...slideProps} ref={contenidoLista}>
					{losTitulos}
				</li>
			</ul>
			<div className="flechaDerecha" onClick={muevaLaListaDerecha}>
				<IconFlechaDerecha></IconFlechaDerecha>
			</div>
		</div>
	);
}
