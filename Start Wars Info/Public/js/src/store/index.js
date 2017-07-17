import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/'; 

// here we can add middleware like react-thunk for async calls
export default function configureStore(initialState) {
	return createStore(
        rootReducer
        , initialState
        , applyMiddleware(thunk)
    );
}