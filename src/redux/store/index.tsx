import { configureStore } from "@reduxjs/toolkit";
import FontReducer from "../slice/homePage";
import { SearchValueReducer } from "../slice/serchSlice";
import { textAreaReducer } from "../slice/textAreaSlice";
import { sliderReducer } from "../slice/sliderSlice";
import { allFontsReducer } from "../slice/allFontsSlice";

const store = configureStore({
    reducer: {
        font: FontReducer,
        searchData: SearchValueReducer,
        allFontsData: allFontsReducer,
        areaValue: textAreaReducer,
        sliderValue: sliderReducer,
    }
})

export default store
