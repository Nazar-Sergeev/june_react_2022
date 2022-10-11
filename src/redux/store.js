import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/user.slice";

const rootReducer = combineReducers({
    userReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};