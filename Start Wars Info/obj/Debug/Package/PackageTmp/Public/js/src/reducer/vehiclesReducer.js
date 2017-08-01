import { ADD_VEHICLES, CLEAN_VEHICLES } from '../constant/constant';

export function vehicles(state = [], action) {
    switch (action.type) {
        case ADD_VEHICLES:
            return [
                ...state,
                action.vehicle
            ];
        case CLEAN_VEHICLES:
            return action.vehicles;
        default:
            return state;
    };
};