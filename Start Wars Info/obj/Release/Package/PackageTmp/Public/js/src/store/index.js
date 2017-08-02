import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducer/'; 

const middlewares = [thunk, routerMiddleware(browserHistory)];

// here we can add middleware like react-thunk for async calls
export default function configureStore(initialState) {
	return createStore(
        rootReducer
        , initialState
        , applyMiddleware(...middlewares)
    );
}