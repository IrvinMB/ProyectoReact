import React, { Component, useState } from 'react';
import MenuGeneral from './Menu';
import Splash from '../view/Splash';
class App extends Component {
	state = {
		initial: 'state',
		iniciado: false,
	};
	constructor(props) {
		super(props);
		this.state = {
			iniciado: true,
		};
		this.setEstado = this.setEstado.bind(this);
		this.MostrarPaginaDeInicio = this.MostrarPaginaDeInicio.bind(this);
	}
	setEstado() {
		this.setState({
			iniciado: !this.state.iniciado,
		});
		alert(this.state.iniciado);
	}

	MostrarPaginaDeInicio() {
		return (
			<>
				{this.state.iniciado ? (
					<MenuGeneral />
				) : (
					<Splash elContexto={this.setEstado} />
				)}
			</>
		);
	}
}
export default App;
