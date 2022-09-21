import React, { useRef } from 'react';
import './login.css';
export default function ComponenteLogin(props) {
	let nombreUsuarioInput = useRef('');
	let passwordInput = useRef('');
	const alEnviar = (event) => {
		event.preventDefault();
		localStorage.setItem('usuario', JSON.stringify({
			correo: nombreUsuarioInput.current.value,
			password: passwordInput.current.value,
		}));
		
		props.onLogin(JSON.parse(localStorage.getItem('usuario')).correo);
	};

	return (
		<div className="container">
			<div id="login">
				<img src="./images/icon.png" className="logo" alt="logo" />{' '}
				<form className="login-form" onSubmit={alEnviar}>
					<span className="fa fa-user"></span>
					<input
						autoFocus
						maxLength="25"
						ref={nombreUsuarioInput}
						placeholder="Email"
						type="email"
						required
					/>
					<span className="fa fa-lock"></span>
					<input
						autoComplete="off"
						maxLength="8"
						placeholder="Password"
						type="password"
						ref={passwordInput}
						required
					/>
					<input type="submit" value="Log in" />
				</form>
			</div>
			<div className="sign-up__actions clearfix">
				<p>
					No tienes usario? <a href="/sign-up">Registrarse</a>
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
