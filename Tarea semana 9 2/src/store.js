import { configureStore } from '@reduxjs/toolkit';
import usuarioReducer from './components/Usuario/state/usuarioReducer';
import favoritoReducer from './components/favorito/state/favoritoReducer';

export const store = configureStore({
	reducer: {
		usuario: usuarioReducer,
		losFavoritos: favoritoReducer,
	},
});
