import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './registro.css';

export default function Registro(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		trigger,
	} = useForm();
	const onSubmit = (data) => {
		localStorage.setItem(
			'usuarioRegistrado',
			JSON.stringify({
				data,
			})			
		);
		props.onRegister();
		// fetch('/bd',{
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({ title: 'React POST Request Example' })
		// })
		// 	.then((data) => data.json)
		// 	.then((elResultado) => {
		// 		console.log("Respuesta",elResultado);
		// 	}
		// 	);
	};

	useEffect(() => {
		watch((value, { name, type }) => console.log(value, name, type));
	}, [watch]);
	return (
		<div className="container">
			<div id="registre">
				<h1>Registro</h1>
				<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="Nombre"
						{...register('nombre', {
							required: 'El nombre es requerido',
							minLength: 2,
						})}
						onBlur={() => {
							trigger('nombre');
						}}
					/>
					<p className="errores">{errors.nombre?.message}</p>
					<input
						type="text"
						placeholder="Apellidos"
						{...register('apellidos', {
							required: 'Los apellidos son requeridos',
							minLength: {
								value: 5,
								message: 'Los apellidos no cumplen con el mínimo requerido',
							},
						})}
						onBlur={() => {
							trigger('apellidos');
						}}
					/>
					<p className="errores">{errors.apellidos?.message}</p>
					<input
						type="email"
						placeholder="Correo"
						{...register('correo', {
							required:
								'El correo es requerido en formato de coreo nombre@mail.com',
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Formato de correo invalido',
							},
						})}
						onBlur={() => {
							trigger('correo');
						}}
					/>
					<p className="errores">{errors.correo?.message}</p>
					<input
						type="password"
						placeholder="Contraseña"
						{...register('password', {
							required: 'Se requiere una contraseña',
						})}
						onBlur={() => {
							trigger('password');
						}}
					/>
					<p className="errores">{errors.password?.message}</p>
					<input type="submit" value="Registrar" />
				</form>
			</div>
		</div>
	);
}
