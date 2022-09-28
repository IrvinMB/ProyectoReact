import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFavorito = createAsyncThunk(
	'losFavorito/getFavorito',
	async () => {
		const res = await fetch('http://localhost:1337/api/Favoritos')
			.then((x) => x.json())
			.then((d) => {
				const myData = d.data?.map(
					({ id, attributes: { tipo, identificador } }) => {
						return {
							id,
							tipo,
							identificador,
						};
					}
				);
				return myData;
			});
		return res;
	}
);

export const insertFavorito = createAsyncThunk(
	'losFavorito/insertFavorito',
	async (params) => {
		const formData = new FormData();
		formData.append(
			'data',
			JSON.stringify({
				identificador: `${params.id}`,
				tipo: `${params.tipo}`,
			})
		);
		let res = await fetch('http://localhost:1337/api/Favoritos', {
			method: 'post',
			body: formData,
		}).then((x) => x.json());
		return res;
	}
);
export const eliminaFavorito = createAsyncThunk(
	'losFavorito/eliminaFavorito',
	async (params) => {
	
		let res = await fetch(`http://localhost:1337/api/Favoritos/${params.id}`, {
			method: 'DELETE',
		}).then((x) => x.json());
		return res;
	}
);
