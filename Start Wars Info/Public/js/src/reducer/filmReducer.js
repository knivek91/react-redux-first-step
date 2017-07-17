import { GET_FILM, LOADING, ADD_CHARACTER } from '../constant/constant';

export function film (state = {}, action) {
	switch(action.type) {
		case GET_FILM:
			return action.film;
		default :
			return state;
	}
};

export function loading (state = {}, action) {
	switch(action.type) {
        case LOADING:
			return action.isLoading;
		default :
			return state;
	}
};

export function characters (state = [], action) {
	switch(action.type) {
        case ADD_CHARACTER:
			return [
                ... state.characters,
                action.character
            ];
		default :
			return state;
	}
};