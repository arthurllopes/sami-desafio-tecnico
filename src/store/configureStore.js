import { configureStore, combineReducers } from "@reduxjs/toolkit";
import items from './Items'
import modal from "./Interface";

const reducer = combineReducers({items, modal})
const store = configureStore({reducer})

export default store
