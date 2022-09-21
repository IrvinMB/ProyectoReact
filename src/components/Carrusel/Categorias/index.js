import React, { useState, useRef,useEffect } from 'react';
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
	const [laPosicion, setPosicion] = useState(0);
	const slideProps = {
		style: { transform: `translateX(${laPosicion}px)` },
	};
	// const laTransformacion = {style:'transform: "translateX('+laPosicion+')"'};
	let losItemos = [];
    // useEffect(() => {
    //     const containerWidth = contenidoLista.current.clientWidth - PADDINGS;
    //     setContainerWidth(containerWidth);
    //   }, [contenidoLista.current]);
	props.elContenido.forEach((elElemento, key) => {
		losItemos.push(
			<Item
                Imagen={elElemento.poster_path}
                Id={elElemento.id}
                key={elElemento.id + key}
                tipo={props.tipo}
			/>
		);
	});
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
			<ul className="ItemsDeCategoria" >
				<li className="items" {...slideProps} ref={contenidoLista}>
					{losItemos}
				</li>
			</ul>
			<div className="flechaDerecha" onClick={muevaLaListaDerecha}>
				<IconFlechaDerecha></IconFlechaDerecha>
			</div>
		</div>
	);
}
