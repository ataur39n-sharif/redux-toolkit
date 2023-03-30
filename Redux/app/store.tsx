import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoControlSlic";
import blogReducer from "../features/blogs/blogSlice";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: {
        todos: todoReducer,
        posts: blogReducer
    }
})

export default store;