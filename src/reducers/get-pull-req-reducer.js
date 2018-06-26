import {userConstants } from "../constants/user-constant";

var intialState = {
    error: false,
    data:[],
}
export const getPullReqReducer = (state = intialState, action) => {
    console.log("..In reducer", action);

    switch (action.type) {

        case userConstants.GETPULLREQDATA:
            return {
                ...state,
                error: false,
                data:[],
            }

        default:
            return {
                ...state,
                error: false,
                data:[],
            };

    }
}

export default getPullReqReducer;