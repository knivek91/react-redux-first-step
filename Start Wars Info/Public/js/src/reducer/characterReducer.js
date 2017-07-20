import { ADD_CHARACTER, CLEAN_CHARACTER } from '../constant/constant';

export function characters(state = [], action) {
    switch (action.type) {
        case ADD_CHARACTER:
            return [
                ...state,
                action.character
            ];
        case CLEAN_CHARACTER:
            return action.characters;
        default:
            return state;
    }
};