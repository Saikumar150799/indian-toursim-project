import { ActionTypes } from "../contants/actionType"

const initialState={
    states:[],
}

export const statesReducer=(state=initialState,{type,payLoad})=>{
    switch(type){
        case ActionTypes.SET_STATES:return {...state,states:payLoad}//assigning empty states array to Payload that is url from setlists.js
        default:return state
    }
}

export const selectedStatesReducer=(state={},{type,payLoad})=>{
    switch(type){
        case ActionTypes.SELECTED_STATES:return {...state,...payLoad}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:return {}
        default:return state
    }
}