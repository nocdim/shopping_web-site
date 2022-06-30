import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { typeAPI } from "../services/TypeService";
import brandReducer from './reducers/BrandSlice'

const rootReducer = combineReducers({
    brandReducer,
    [typeAPI.reducerPath]: typeAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(typeAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']