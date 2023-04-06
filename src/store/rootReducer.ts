import { combineReducers } from "@reduxjs/toolkit";

import modalSliceReducer from "./modal/modalSlice";

const rootReducer = combineReducers({
    modal: modalSliceReducer,
});

export default rootReducer;