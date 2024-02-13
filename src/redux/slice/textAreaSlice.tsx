import {createSlice}  from "@reduxjs/toolkit";

const initialState = {
    textAreaValue: ""
}

const textAreSlice = createSlice({
    name: "inpValue",
    initialState,
    reducers:{
        AreaValue: (state:any, action)=>{
            state.textAreaValue = action.payload
        }
    }
})

export const {AreaValue} = textAreSlice.actions
export const textAreaReducer = textAreSlice.reducer