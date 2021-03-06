import {userConstant } from "../constants/user-constant";

var intialState = {
    error: false,
    data:[],
    comments:[]
}
export const getPullReqReducer = (state = intialState, action) => {
    // console.log("..In reducer", action);

    switch (action.type) {

        case userConstant.GETPULLREQDATA:
            return {
                ...state,
                error: false,
                data: action.data,
            }
        
        case userConstant.GETCOMMENTS:{
            return{
                ...state,
                error:false,
                comments:action.data,
                data:[]
            }
        }
        
        case userConstant.FAILURE:
          return{
              ...state,
              error:true,
              comments:[],
              data:action.data,
          }
        
        case userConstant.COMMENTFAILURE:
            return{
                ...state,
                error: true,
                comments: action.comments,
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