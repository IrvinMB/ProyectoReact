import React, { Component } from 'react';
import MenuGeneral from './Menu';
import Splash from '../view/Splash';
class App extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	iniciado: false
		// };
		this.state = {
            count: 0,
            other:0
        };
		this.setEstado = this.setEstado.bind(this);		
	}
	setEstado(x){
		this.setState({iniciado:true});
	}
		
	render() {
		return (
			<>
				{this.state.iniciado ? (
					<MenuGeneral />
				) : (					
					<Splash elContexto={(x)=>{
						this.setEstado()}} />
				)}
			 </>
		);
	}
}
export default App;
