import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from "./components/Usuario/state/usuarioReducer";


export const store = configureStore({
  reducer:{
    usuario: usuarioReducer,

  }  
})