import { React } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Menu from './view/Menu';
import RoutesApp from './routes/Routes';
// import Splash from './view/Splash';
// Home()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
      <Menu /> 
	</BrowserRouter>
);

reportWebVitals();
