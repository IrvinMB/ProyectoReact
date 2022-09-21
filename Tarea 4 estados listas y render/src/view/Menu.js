import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../components/menu';
import Rutas from '../components/menu/rutas';

import '../style/Menu.css';
const lasRutas = new Rutas();
function MenuGeneral(props) {
	return (
		<BrowserRouter>
			<Menu NombreDeUsuario={props.NombreDeUsuario}
				onCerrar={props.onCerrar} />
			<lasRutas.MuestreLasRutas />
		</BrowserRouter>
	);
}
export default MenuGeneral;
