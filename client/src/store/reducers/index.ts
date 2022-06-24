import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer
})

// получаем тип Reducer'a
export type RootState = ReturnType<typeof rootReducer>