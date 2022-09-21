import  React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../view/Home';
import Peliculas from '../../view/Peliculas';
import Series from '../../view/Series';
import Favoritos from "../../view/Favoritos";
import Detalle from '../../view/Detalle';
class Rutas extends React.Component {
	constructor(props) {
		super();
	}
	MuestreLasRutas() {
		return (
			<div className="contenidoVariante">		
				<div className="main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/peliculas" element={<Peliculas />} />
						<Route path="/series" element={<Series />} />
						<Route path="/favoritos" element={<Favoritos />} />
						<Route path="/detalle/:id" element={<Detalle />} />
					</Routes>
				</div>
			</div>
		);
	}
}
export default Rutas;
