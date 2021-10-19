import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

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

export const fetchItems = (id) => async (dispatch) => {
    try {
        dispatch(fetchStarted())
        const response = await api.get(`/${id}`)
        const data = await response.data
        const action = data.results ? [...data.results] : [data]
        if(data.response === 'error') throw new Error(data)
        return dispatch(fetchSuccess(action))
    } catch (err) {
        dispatch(fetchError(err.error))
    }
}

export default slice.reducer
