import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";

const initialState = {
    posts: [],
    currentPost: null,
    postFromAPI: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data.slice(0, 10);
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        },
        deleteById: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index, 1);
        }
    },

    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.postFromAPI = action.payload;
            })
    }
});


const {reducer: postReducer, actions: {setCurrentPost, deleteById}} = postSlice;

const postActions = {
    getAll,
    getById,
    setCurrentPost,
    deleteById
}

export {
    postReducer,
    postActions
}