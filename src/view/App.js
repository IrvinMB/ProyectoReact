import React from 'react';
import MenuGeneral from './Menu';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { iniciado: false };
	}
	MostrarPaginaDeInicio() {
		return <MenuGeneral />;
	}
}
export default App;
