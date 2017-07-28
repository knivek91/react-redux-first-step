import { ADD_STARSHIP, CLEAN_STARSHIP } from '../constant/constant';

export function starships(state = [], action) {
    switch (action.type) {
        case ADD_STARSHIP:
            return [
                ...state,
                action.starship
            ];
        case CLEAN_STARSHIP:
            return action.starships;
        default:
            return state;
    };
};