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
			NombreDeUsuario: '',
		};

		this.setEstado = this.setEstado.bind(this);
		this.CierreLaSesion = this.CierreLaSesion.bind(this);
	}
	setEstado() {
		this.setState({ mostrarBienvenida: false });
	}
	setUsuario(correo) {
		this.setState({
			mostrarBienvenida: false,
			EstaLogeado: true,
			NombreDeUsuario: correo,
		});
	}
	verifiqueElLocalStorage() {
		let elUsuarioDeLocalStorage = JSON.parse(localStorage.getItem('usuario'));
		if (elUsuarioDeLocalStorage.correo != '') {
			this.setUsuario(elUsuarioDeLocalStorage.correo);
		}
	}
	CierreLaSesion() {
		this.setState({
			mostrarBienvenida: true,
			EstaLogeado: false,
			NombreDeUsuario: '',
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
						NombreDeUsuario={this.state.NombreDeUsuario}
						onCerrar={this.CierreLaSesion}
					/>
				) : (
					<Login
						onLogin={(x) => {
							this.setUsuario(x);
							this.setState();
						}}
					/>
				)}
			</>
		);
	}
}
export default App;
