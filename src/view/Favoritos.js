import React,{ useState, useEffect}  from 'react';
import Favorito from '../components/favorito'; 
import useConexion from '../services/Conexion';
import { useSelector, useDispatch } from 'react-redux';
import { getFavorito } from '../components/favorito/state/favoritoActions';
function Favoritos() {
	const dispatch = useDispatch();
	const elStorage = useSelector((state) => state.losFavoritos.favorito);
	 const loading = useSelector((state) => state.losFavoritos.agrega);
	console.log(elStorage);
	// const url = + elStorage[0].tipo+'/' + location.state.id;
	//  const [losDatos, elError] = useConexion(url);
	//  const [elDetalleAMostrar, setDetalle] = useState(null);
	useEffect(() => {
		dispatch(getFavorito());
		// setDetalle(losDatos)
	}, []);
	useEffect(() => {
		console.log(elStorage);
	}, [elStorage]);

	return <Favorito  />;
}
export default Favoritos;
