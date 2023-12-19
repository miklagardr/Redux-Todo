import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : 'searchs', 
    initialState : {
        serbar : '' , 
        serfilter : ''
    }, 
    reducers : {
        changeBar(state,action){
            state.serbar = action.payload; 
        }, 
        changeFilter(state,action){
            state.serfilter = action.payload;
        }
    }, 
})

export const searchReducer = searchSlice.reducer 
export const {changeBar,changeFilter} = searchSlice.actions