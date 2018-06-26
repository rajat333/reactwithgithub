import { combineReducers } from 'redux';

import getPullReqReducer from "./get-pull-req-reducer";

export const rootreducer = combineReducers({
        pulldata : getPullReqReducer,             
});
export default rootreducer;