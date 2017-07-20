import {combineReducers} from 'redux';
import { film, loading } from './filmReducer';
import { characters } from './characterReducer';
import { planets } from './planetReducer';
import { vehicles } from './vehiclesReducer';
import { starships } from './starshipReducer';

// More reducers if there are can go here, The combination is done with combineReducers() from the Redux library.
export default combineReducers({
	film,
    isLoading: loading,
    characters,
    planets,
    starships
});