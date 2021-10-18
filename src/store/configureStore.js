import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import items from './Items'

const reducer = combineReducers({items})
const store = configureStore({reducer})

export default store
