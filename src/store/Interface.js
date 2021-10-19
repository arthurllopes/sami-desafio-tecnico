import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

const slice = createSlice({
    name: 'modal',
    initialState: {
        modal: false,
        data: null,
    },
    reducers: {
        open(state, action){
            state.modal = true
            state.data = action.payload
        },
        closeModal(state){
            state.modal = false
            state.data = null
        }
    }
})

export const {open, closeModal} = slice.actions

export const openModal = (id) => async (dispatch) => {
    try{
        const response = await api.get(`/${id}`)
        const data = await response.data
        return dispatch(open(data))
    } catch {}
}

export default slice.reducer