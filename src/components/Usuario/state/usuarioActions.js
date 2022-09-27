import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsuario = createAsyncThunk(
	'usuario/getUsuario',
    async () => {
        
		const res = await fetch('http://localhost:1337/api/Usuarios?populate=*')
			.then((x) => x.json())
            .then((d) => {
				const myData = d.data
					?.map(
						({
							id,
							attributes: {
								nombre,
								apellidos,
								correo,
								password,
								foto: {
									data: {
										attributes: { url },
									},
								},
							},
						}) => {
							return {
								id,
								nombre,
								apellidos,
								correo,
								password,
								foto: 'http://localhost:1337' + url,
							};
						}
					);
				return myData;
			});
		return res;
	}
);

export const insertUsuario = createAsyncThunk(
	'usuario/insertUsuario',
	async (params) => {
		const formData = new FormData();
		formData.append(
			'files.foto',
			params.files.foto[0],
			params.files.foto[0].name
		);
		delete params.files;
		formData.append('data', JSON.stringify(params));
		console.log('Nuevo usuario', formData);
		let res = await fetch('http://localhost:1337/api/Usuarios', {
			method: 'post',
			body: formData,
		});
		return res;
	}
);
