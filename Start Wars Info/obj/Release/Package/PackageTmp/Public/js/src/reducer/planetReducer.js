import { ADD_PLANET, CLEAN_PLANET } from '../constant/constant';

export function planets(state = [], action) {
    switch (action.type) {
        case ADD_PLANET:
            return [
                ...state,
                action.planet
            ];
        case CLEAN_PLANET:
            return action.planets;
        default:
            return state;
    };
};