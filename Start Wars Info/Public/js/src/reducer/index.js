import {combineReducers} from 'redux';
import { film, loading, characters } from './filmReducer';

// More reducers if there are can go here, The combination is done with combineReducers() from the Redux library.
export default combineReducers({
	film,
    isLoading: loading,
    characters
});