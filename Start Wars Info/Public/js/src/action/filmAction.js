import axios from 'axios';
import { GET_FILM, LOADING, ADD_CHARACTER } from '../constant/constant';

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

const addCharacter = (character) => {
    return {
        type: ADD_CHARACTER,
        character
    }
}

export const fetchFilmAsync = (movie) => {
	return (dispatch) => {
		axios.get(`http://swapi.co/api/films/${movie}`)
        .then((response) => {dispatch(fetchFilm(response.data)); })
        .catch((error) => { console.log(error); });
	}
} 

export const fetchCharacterAsync = (id) => {
	return (dispatch) => {
		axios.get(`http://swapi.co/api/species/${id}`)
        axios.get(id)
        .then((response) => {dispatch(addCharacter(response.data)); })
        .catch((error) => { console.log(error); });
	}
} 