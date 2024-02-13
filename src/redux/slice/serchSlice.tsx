import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    searchValue: ""
}

const searchSliceData = createSlice(
    {
        name : "SearchValue",
        initialState,
        reducers:{
            SEARCHTHING:(state: any, action)=>{
                state.searchValue = action.payload
            }
        }
    }
)

export const {SEARCHTHING} = searchSliceData.actions
export const SearchValueReducer = searchSliceData.reducer