import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Peliculas from '../view/Peliculas';
import Series from '../view/Series';
import Favoritos from '../view/Favoritos';
import Home from '../view/Home';
function RoutesApp() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/peliculas" element={<Peliculas />} />
				<Route path="/series" element={<Series />} />
				<Route path="/favoritos" element={<Favoritos />} />
			</Routes>
		</>
	);
}
export default RoutesApp();
