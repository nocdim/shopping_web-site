import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import brandReducer from './reducers/BrandSlice'

const rootReducer = combineReducers({
    brandReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']