import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


const rootReducer = combineReducers({

})

export const store = configureStore({
   reducer: rootReducer,
   middleware: [thunk],
   devTools: true
})