import { GET_FILM, LOADING } from '../constant/constant';

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