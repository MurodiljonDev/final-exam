import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    allFontsData: []
}

const allFontsSlice = createSlice({
    name: "allFontsValue",
    initialState,
    reducers:{
        allFontsValue: (state:any, action)=>{
            state.allFontsData = action.payload
        }
    }
})

export const {allFontsValue} = allFontsSlice.actions
export const allFontsReducer = allFontsSlice.reducer