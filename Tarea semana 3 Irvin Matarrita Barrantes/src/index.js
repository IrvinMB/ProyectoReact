import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App,{ mostrarPaginaDeInicio} from './view/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const laPagina = new App(this);
root.render(
	<laPagina.MostrarPaginaDeInicio />
);

reportWebVitals();
