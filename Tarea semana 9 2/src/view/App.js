import React, { Component } from 'react';
import MenuGeneral from './Menu';
import Splash from '../view/Splash';
import Login from '../view/Login';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mostrarBienvenida: true,
			EstaLogeado: false,
			usuario: null,
		};

		this.setEstado = this.setEstado.bind(this);
		this.CierreLaSesion = this.CierreLaSesion.bind(this);
	}
	setEstado() {
		this.setState({ mostrarBienvenida: false });
	}
	setUsuario(usuario) {
		this.setState({
			mostrarBienvenida: false,
			EstaLogeado: true,
			usuario: usuario
		});
	}
	verifiqueElLocalStorage() {
		let elUsuarioDeLocalStorage = JSON.parse(localStorage.getItem('usuario'));
		console.log(elUsuarioDeLocalStorage)
		if (elUsuarioDeLocalStorage) { 
			if (elUsuarioDeLocalStorage.correo != '') {
				this.setUsuario(elUsuarioDeLocalStorage);
			}
		}
	}
	CierreLaSesion() {
		this.setState({
			mostrarBienvenida: true,
			EstaLogeado: false,
			usuario: null
		});
		localStorage.removeItem('usuario');
	}
	componentDidMount() {
		this.verifiqueElLocalStorage();
	}

	render() {
	
		return (
			<>
				{this.state.mostrarBienvenida ? (
					<Splash
						elContexto={(x) => {
							this.setEstado();
						}}
					/>
				) : this.state.EstaLogeado ? (
					<MenuGeneral
							Usuario={this.state.usuario}
						onCerrar={this.CierreLaSesion}
					/>
				) : (
					<Login
						onLogin={(usuario) => {
							this.setUsuario(usuario);
								}}
						onCambioDeEstado={() => {
							this.setEstado();
						}}
					/>
				)}
			</>
		);
	}
}
export default App;
