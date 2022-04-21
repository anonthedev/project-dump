import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import projectReducer from "./features/projectSlice";
import libraryReducer from "./features/librarySlice"

export default configureStore({
    reducer: {
        user: userReducer,
        project: projectReducer,
        library: libraryReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})