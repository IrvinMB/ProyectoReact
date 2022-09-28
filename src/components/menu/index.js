import React from 'react';
import { NavLink } from 'react-router-dom';
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
						<img src="./images/icon.png" className="logo" alt="logo" />
						
						</li>
						<li>
							<NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Inicio</NavLink>
						</li>
						<li>
							<NavLink to="/peliculas" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Peliculas</NavLink>
						</li>
						<li>
							<NavLink to="/series" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Series</NavLink>
						</li>
						<li>
							<NavLink to="/favoritos" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Favoritos</NavLink>
						</li>
						<li >
							<div className="perfil">
								<img src={ `${this.props.usuario.foto}`} className="imgRedonda" alt={this.props.NombreDeUsuario} />
								<label>{this.props.usuario.nombre}</label>
								<a className="session" onClick={this.props.onCerrar}>
									Cerrar Sesión
									</a>
							</div>
						</li>
					</ul>

				
				</nav>
			</div>
		);
	}
}
export default Menu;
