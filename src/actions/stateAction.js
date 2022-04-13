import { ActionTypes } from "../contants/actionType"

export const setStates = (states) => {
    return {
        type: ActionTypes.SET_STATES,
        payLoad: states
    }
}


export const selectedStates = (states) => {
    return {
        type: ActionTypes.SELECTED_STATES,
        payLoad: states
    }
}

export const removeSelectedStates = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    }
}