import { createSlice } from "@reduxjs/toolkit"
import { getUsuario,insertUsuario } from "./usuarioActions"

const initialState={
    usuario:[]
}

export const usuarioSlice = createSlice({
    name:"usuario",
    initialState,
    reducers:{},
    extraReducers:{
        [getUsuario.pending]:(state)=>{
            state.loading =true;
        },
        [getUsuario.rejected]:(state)=>{
            state.loading =false;
        },
        [getUsuario.fulfilled]:(state,{payload})=>{
            state.loading =true;
            state.usuario = payload;
        },
        [insertUsuario.pending]:(state)=>{
            state.loading=true;
        },

        [insertUsuario.fulfilled]:(state)=>{
            state.loading=false;
        }
    }
})

export default usuarioSlice.reducer