import React, { useRef, useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { getUsuario } from '../Usuario/state/usuarioActions';
import './login.css';
export default function ComponenteLogin(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		trigger,
	} = useForm();
	const [usuarioInvalido, setUsuarioInvalida] = useState(false);
	const elStorage = useSelector((state) => state.usuario.usuario);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsuario());
	 }, []);
	const alEnviar = (event) => {		
		let elUsuarioDeLocalStorage = elStorage?.find(elUsuario => { 
			return (elUsuario.correo ==  event.correo)
		});
		if (elUsuarioDeLocalStorage){
			localStorage.setItem(
				'usuario',
				JSON.stringify(
					elUsuarioDeLocalStorage
				)
			);
			props.onLogin(elUsuarioDeLocalStorage.correo,elUsuarioDeLocalStorage.nombre,elUsuarioDeLocalStorage.foto);

		} else {
			setUsuarioInvalida(true);
		}		
	};

	return (
		<div className="container">
			<div id="login">
				<img src="./images/icon.png" className="logo" alt="logo" />{' '}
				<form className="login-form" onSubmit={handleSubmit(alEnviar)}>
					<span className="fa fa-user"></span>
					{/* <input
						autoFocus
						maxLength="25"
						ref={nombreUsuarioInput}
						placeholder="Email"
						type="email"
						required
					/> */}
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

					<span className="fa fa-lock"></span>
					{/* <input
						autoComplete="off"
						maxLength="8"
						placeholder="Password"
						type="password"
						ref={passwordInput}
						required
					/> */}
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
					{usuarioInvalido ? (
						<p className="errores">Usuario o contraseña invalido</p>
					) : null}
					<input type="submit" value="Log in" />
				</form>
			</div>
			<div className="sign-up__actions clearfix">
				<p>
					No tienes usario?{' '}
					<a
						href="/Registro"
						onClick={(e) => {
							e.preventDefault();
							props.onCambioDeEstado();
						}}
					>
						Registrarse
					</a>
					<span className="fa fa-arrow-right"></span>
				</p>
			</div>

			<div className="sign-in__actions clearfix">
				<ul>
					{/* <li><a onClick={this.props.signInWithGithub.bind(this)} className="link link-github"></a></li>
                <li><a onClick={this.props.signInWithGoogle.bind(this)} className="link link-google"></a></li>
                <li><a onClick={this.props.signInWithTwitter.bind(this)} className="link link-twitter"></a></li>
                <li><a onClick={this.props.signInWithFacebook.bind(this)} className="link link-facebook"></a></li> */}
				</ul>
			</div>

			{/* {this.props.alert.display ? this.renderAlert() : null} */}
		</div>
	);
}
