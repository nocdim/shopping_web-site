import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { brandAPI } from "../services/BrandService";
import { typeAPI } from "../services/TypeService";

const rootReducer = combineReducers({
    [brandAPI.reducerPath]: brandAPI.reducer,
    [typeAPI.reducerPath]: typeAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
            .concat(typeAPI.middleware)
            .concat(brandAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']