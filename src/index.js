import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootreducer from "./reducers/index";
import  thunk  from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware  } from 'redux';

var customMiddleware = (store)=>(next)=>(action)=>{
     const returnValue = next(action); // for callling action next pass like next() in node js
    return returnValue;  
}

const store = createStore(rootreducer, 
                          compose(applyMiddleware( thunk, customMiddleware )) 
                         );
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
