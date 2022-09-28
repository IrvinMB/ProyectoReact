import React,{ useState, useEffect}  from 'react';
import Favorito from '../components/favorito'; 
import useConexion from '../services/Conexion';
import { useSelector, useDispatch } from 'react-redux';
import { getFavorito } from '../components/favorito/state/favoritoActions';
function Favoritos() {
	// const dispatch = useDispatch();
	// const elStorage = useSelector((state) => state.losFavoritos.favorito);
	//  const loading = useSelector((state) => state.losFavoritos.loading);
	// // console.log(elStorage);
	// // 
	// //  const [losDatos, elError] = useConexion(url);
	// //  const [elDetalleAMostrar, setDetalle] = useState(null);
	// const [losDatosConsultar, setLosDatosConsultar] = useState([]);
	// useEffect(() => {
	// 	dispatch(getFavorito());
	
	// 	// setDetalle(losDatos)
	// 	// console.log(elStorage);
	// }, []);
	// useEffect(() => {
	// 	let leDato = [];
	// 	if (loading) { 
	// 		leDato=elStorage.map(({tipo,identificador}) => {
	// 			return {tipo:tipo,identificador:identificador}
	// 		});
	// 	}
	// 	setLosDatosConsultar(leDato)
	// }, [elStorage]);
	// useEffect(() => {
	// 	losDatosConsultar.forEach()
	// 	const url = + elStorage[0].tipo+'/' + location.state.id;
	// }, [losDatosConsultar]);
	return <Favorito MostrarSoloFavoritos={true} />;
}
export default Favoritos;
