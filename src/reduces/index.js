import { combineReducers } from "redux";
import { statesReducer,selectedStatesReducer } from "./statesReducer";

const reducers=combineReducers({
    allStates:statesReducer,
    state:selectedStatesReducer,
})

export default reducers