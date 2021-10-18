import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'items',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        fetchStarted (state) {
            state.loading = true
        },
        fetchSuccess (state, action) {
            state.loading = false
            state.data = action.payload
        },
        fetchError(state, action) {
            state.loading = false
            state.error = action.payload
        }
    }
})

const { fetchError, fetchStarted, fetchSuccess } = slice.actions

export const fetchItems = async (dispatch) => {
    try{
        dispatch(fetchStarted())
        await fetch()
        return dispatch(fetchSuccess())
    } catch (err) {
        dispatch(fetchError(err.message))
    }
}

export default slice