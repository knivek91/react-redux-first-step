import axios from 'axios';
import { ADD_VEHICLES, CLEAN_VEHICLES } from '../constant/constant';

const fetchVehicle = (vehicle) => {
    return {
        type: ADD_VEHICLES,
        vehicle
    };
}

const cleanVehicles = (vehicles) => {
    return {
        type: CLEAN_VEHICLES,
        vehicles
    };
}

export const resolveVehicleURL = (dispatch, vehiclesURL) => {
    dispatch(cleanVehicles([]));
    vehiclesURL.forEach((url) => {
        axios.get(url)
            .then((response) => {
                const vehicle = response.data;
                dispatch(fetchVehicle(vehicle));
            })
            .catch((error) => { console.log(error); });
    });
}