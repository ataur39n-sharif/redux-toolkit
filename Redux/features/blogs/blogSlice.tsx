import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loadPosts} from "./blogApi";

export interface Ipost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface Istate {
    posts: Ipost[],
    loading: boolean,
    error: boolean
}

const initialState: Istate = {
    posts: [],
    loading: false,
    error: false,
}

export const fetchPosts = createAsyncThunk("blogs/getPosts", async () => {
    const pd = loadPosts();
    return pd
})
const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        showLoading: (state, action) => {
            state.loading = true
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export default blogSlice.reducer