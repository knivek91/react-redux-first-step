import axios from 'axios';
import { ADD_PLANET, CLEAN_PLANET } from '../constant/constant';

const fetchPlanet = (planet) => {
    return {
        type: ADD_PLANET,
        planet
    };
}

export const cleanPlanets = (planets) => {
    return {
        type: CLEAN_PLANET,
        planets
    };
}

export const resolvePlanetURL = (dispatch, planetsURL) => {
    dispatch(cleanPlanets([]));
    planetsURL.forEach((url) => {
        axios.get(url)
            .then((response) => {
                const planet = response.data;
                dispatch(fetchPlanet(planet));
            })
            .catch((error) => { console.log(error); });
    });
}