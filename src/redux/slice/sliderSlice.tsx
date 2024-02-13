import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sliderValue: 40
}

const sliderValueSlice = createSlice({
    name: "sliderValue",
    initialState,
    reducers:{
        SliderValue: (state:any, action)=>{
            state.sliderValue = action.payload
        }
    }
})

export const {SliderValue} = sliderValueSlice.actions
export const sliderReducer = sliderValueSlice.reducer