import { createSlice } from "@reduxjs/toolkit"
import { getFavorito,insertFavorito,eliminaFavorito } from "./favoritoActions"

const initialState={
    favorito: [],
    agrega: false,
}

export const favoritoSlice = createSlice({
    name:"favorito",
    initialState,
    reducers:{},
    extraReducers:{
        [getFavorito.pending]:(state)=>{
            state.loading =true;
        },
        [getFavorito.rejected]:(state)=>{
            state.loading =false;
        },
        [getFavorito.fulfilled]:(state,{payload})=>{
            state.loading =true;
            state.favorito = payload;
        },
        [insertFavorito.pending]:(state)=>{
            state.loading=true;
        },

        [insertFavorito.fulfilled]: (state, { payload }) => {
            state.favorito.push(payload.data);
            state.agrega = !state.agrega;
      
        },
        [eliminaFavorito.pending]:(state)=>{
            state.loading=true;
        },

        [eliminaFavorito.fulfilled]: (state, { payload }) => {
            state.agrega = !state.agrega;
      
        }
    }
})

export default favoritoSlice.reducer