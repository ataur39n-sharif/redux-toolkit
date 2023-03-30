import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoControlSlic";

// export interface RootState {
//     todo: ITodoState
// }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

export default store;