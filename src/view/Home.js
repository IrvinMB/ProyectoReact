import { React } from 'react';
import { Link } from 'react-router-dom';

import '../style/Home.css';
function Home() {
	let logo = './images/icon.png';
	return (
		<div>
			<div className="body">
				<img src={logo} className="logo" alt="logo" />
			</div>
		</div>
	);
}

export default Home;
