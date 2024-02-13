import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import ApiInstance from "../../api";

const API_KEY: string = "AIzaSyC_5xaFYfJk5kV7ozbi0uBLRqhv_4kNrRs"
localStorage.setItem('api-key', API_KEY)

type homePageData = {
    font_data: [],
    isSuccess: boolean,
    isError: boolean,
    isLoading: boolean,
    message: null | string,
    search_value?: string
}
const initialState: homePageData = {
    font_data: [],
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: null,
    search_value:""
}

const homPageSlice = createAsyncThunk("get-fonts", async () => {
    try {
        const response: AxiosResponse = await ApiInstance.get(`/webfonts?key=${API_KEY}`)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
})

const homePageFonts = createSlice({
    name: "fonts",
    initialState,
    reducers: {
        searchReducer: (state, action) => {
            state.search_value = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(homPageSlice.pending, (state, _) => {
            state.isLoading = true
        }),
            builder.addCase(homPageSlice.fulfilled, (state, action) => {
                // console.log(action);
                state.font_data = action.payload,
                    state.message = "Successfully fulfilled",
                    state.isSuccess = true,
                    state.isError = false
            }),
            builder.addCase(homPageSlice.rejected, (state, _) => {
                state.isError = true,
                    state.isSuccess = false,
                    state.message = "Wrong returned"
            })
    }
})

export const {searchReducer} = homePageFonts.actions;
export {homPageSlice};
export default homePageFonts.reducer;