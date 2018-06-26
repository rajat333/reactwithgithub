import {userConstant } from "../constants/user-constant";

var intialState = {
    error: false,
    data:[],
}
export const getPullReqReducer = (state = intialState, action) => {
    console.log("..In reducer", action);

    switch (action.type) {

        case userConstant.GETPULLREQDATA:
            return {
                ...state,
                error: false,
                data: action.data,
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