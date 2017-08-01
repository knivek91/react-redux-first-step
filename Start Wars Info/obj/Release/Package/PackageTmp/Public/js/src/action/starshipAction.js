import axios from 'axios';
import { ADD_STARSHIP, CLEAN_STARSHIP } from '../constant/constant';

const fetchStarship = (starship) => {
    return {
        type: ADD_STARSHIP,
        starship
    };
}

const cleanStarships = (starships) => {
    return {
        type: CLEAN_STARSHIP,
        starships
    };
}

export const resolveStarshipURL = (dispatch, starshipsURL) => {
    dispatch(cleanStarships([]));
    starshipsURL.forEach((url) => {
        axios.get(url)
            .then((response) => {
                const starship = response.data;
                dispatch(fetchStarship(starship));
            })
            .catch((error) => { console.log(error); });
    });
}