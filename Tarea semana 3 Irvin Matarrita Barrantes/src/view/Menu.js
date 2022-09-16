import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../components/menu';
import Rutas from '../components/menu/rutas';

import '../style/Menu.css';
const losItems = new Menu();
const lasRutas = new Rutas();
function MenuGeneral() {
	return (
		<BrowserRouter>
			<losItems.MuestreLosElementos />
			<lasRutas.MuestreLasRutas />
		</BrowserRouter>
	);
}
export default MenuGeneral;
