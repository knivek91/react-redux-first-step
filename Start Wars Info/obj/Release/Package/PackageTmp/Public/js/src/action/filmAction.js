import axios from 'axios';
import { GET_FILM, LOADING, ADD_CHARACTER, CLEAN_CHARACTER } from '../constant/constant';
import { resolvePlanetURL } from './planetAction';
import { resolveVehicleURL } from './vehiclesAction';
import { resolveStarshipURL } from './starshipAction';

const fetchFilm = (film) => {
    return {
        type: GET_FILM,
        film
    }
}

const loading = (isLoading) => {
    return {
        type: LOADING,
        isLoading
    }
}

const fetchCharacter = (character) => {
    return {
        type: ADD_CHARACTER,
        character
    }
}

export const cleanCharacters = (characters) => {
    return {
        type: CLEAN_CHARACTER,
        characters
    }
}

const resolveCharacterURL = (dispatch, charactersURL) => {
    dispatch(cleanCharacters([]));
    charactersURL.forEach((url) => {
        axios.get(url)
            .then((response) => {
                const character = response.data;
                dispatch(fetchCharacter(character));
            })
            .catch((error) => { console.log(error); });
    });
}

export const searchCharactersAsync = (text) => {
    return dispatch => {
        dispatch(cleanCharacters([]));
        axios.get(`https://swapi.co/api/people/?search=${text}`)
            .then((response) => {
                const characters = response.data.results;
                characters.forEach(character => dispatch(fetchCharacter(character)));
                
            })
            .catch((error) => { console.log(error); });
    }
}

export const fetchFilmAsync = (movie) => {
    return dispatch => {
        axios.get(`http://swapi.co/api/films/${movie}`)
            .then((response) => {
                const film = response.data;
                dispatch(fetchFilm(film));
                resolveCharacterURL(dispatch, film.characters);
                resolvePlanetURL(dispatch, film.planets);
                resolveVehicleURL(dispatch, film.vehicles);
                console.log(film);
                resolveStarshipURL(dispatch, film.starships);
            })
            .catch((error) => { console.log(error); });
    }
}