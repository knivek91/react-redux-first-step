import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../action/filmAction';

import Character from '../dump/character';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.fetchFilm = this.fetchFilm.bind(this);
    }   
    
    fetchFilm(id) {
        this.props.fetchFilm(id);
    }

    render() {
        const {film, isLoading, characters} = this.props
        console.log(characters);
        if(isLoading) 
            return <h1>Loading . . . </h1>
        return (
             <div className="container">
                <section>
                    <button type="button" className="btn btn-primary" onClick={() => {this.fetchFilm(1)}}>Movie 1</button>
                    <button type="button" className="btn btn-default" onClick={() => {this.fetchFilm(2)}}>Movie 2</button>
                    <button type="button" className="btn btn-warning" onClick={() => {this.fetchFilm(3)}}>Movie 3</button>
                    <button type="button" className="btn btn-danger"  onClick={() => {this.fetchFilm(4)}}>Movie 4</button>
                    <button type="button" className="btn btn-info"    onClick={() => {this.fetchFilm(5)}}>Movie 5</button>
                    <button type="button" className="btn btn-success" onClick={() => {this.fetchFilm(6)}}>Movie 6</button>
                    <button type="button" className="btn btn-primary" onClick={() => {this.fetchFilm(7)}}>Movie 7</button>
                </section>
                <hr />
                <div className="jumbotron">
                    <h1>{film.title}</h1>
                </div>
                <div className="jumbotron">
                    <h1>Characters: </h1>
                    <Character characters={film.species}/>
                </div>
             </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        film: state.film,
        isLoading: state.isLoading,
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilm: movie => dispatch(Actions.fetchFilmAsync(movie)),
        fetchCharacter: id => dispatch(Actions.fetchCharacterAsync(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);