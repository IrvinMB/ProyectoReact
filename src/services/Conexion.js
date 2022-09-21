import React, { useState, useEffect } from 'react';
// https://api.themoviedb.org/3/genre/movie/list?api_key=a620c0618ca19a33ba2509b7288d6123&language=es
export default function useConexion(ruta) {
	const [elResultado, establezcaElResultado] = useState(null);
	const [elError, establezcaElError] = useState(null);

	useEffect(() => {
		fetch(
			process.env.REACT_APP_URLAPI +
				ruta +
				'?api_key=' +
				process.env.REACT_APP_PARAMS
		)
            .then((response) => response.json())
            .then((json) => {
				establezcaElResultado(json);
			})
			.catch((error) => establezcaElError(error));
	}, [ruta]);

	return [elResultado, elError];
}
