import React from 'react';
import { Link } from 'react-router-dom';
class Menu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="itemsDelMenu">
				<nav className="menu">
					<ul>
						<li>
							<img src="./images/icon.png" className="logo" alt="logo" />{' '}
						</li>
						<li>
							<label>{this.props.NombreDeUsuario}</label>
						</li>
						<li>
							<Link to="/">Inicio</Link>
						</li>
						<li>
							<Link to="/peliculas">Peliculas</Link>
						</li>
						<li>
							<Link to="/series">Series</Link>
						</li>
						<li>
							<Link to="/favoritos">Favoritos</Link>
						</li>
					</ul>

					<button className="btn" onClick={this.props.onCerrar}>
						Cerrar Sesión
					</button>
				</nav>
			</div>
		);
	}
}
export default Menu;
