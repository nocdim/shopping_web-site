import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { productAPI } from "../services/ProductService";
import userReducer from './reducers/UserSlice'

const rootReducer = combineReducers({
    userReducer,
    [productAPI.reducerPath]: productAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(productAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']