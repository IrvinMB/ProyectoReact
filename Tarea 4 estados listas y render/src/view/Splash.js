import React from 'react';
import '../style/Splash.css';

function Splash(props) {
	let logo = './logo.ico';
	return (
		<div className="Splash" onClick={props.elContexto}>
			<img src={logo} className="logo" alt="logo" />
		</div>
	);
}

export default Splash.bind(this);
