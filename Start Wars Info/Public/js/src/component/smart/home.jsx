import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as Actions from '../../action/filmAction';

import Character from '../dump/character';
import Planet from '../dump/planet';
import Vehicle from '../dump/vehicles';
import Starship from '../dump/starships';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.fetchFilm = this.fetchFilm.bind(this);
    }   
    
    fetchFilm(id) {
        this.props.fetchFilm(id);
    }

    render() {
        const {film, isLoading} = this.props
        if(isLoading) 
            return <h1>Loading . . . </h1>
        return (
            <div className="container">
                <Link to={'/search-character'} className="btn btn-info">Search Character</Link>
                <section>
                    <button type="button" className="btn btn-primary" onClick={() => { this.fetchFilm(1) }}>A New Hope</button>
                    <button type="button" className="btn btn-default" onClick={() => { this.fetchFilm(2) }}>The Empire Strikes Back</button>
                    <button type="button" className="btn btn-warning" onClick={() => { this.fetchFilm(3) }}>Return of the Jedi</button>
                    <button type="button" className="btn btn-danger" onClick={() => { this.fetchFilm(4) }}>The Phantom Menace</button>
                    <button type="button" className="btn btn-info" onClick={() => { this.fetchFilm(5) }}>Attack of the Clones</button>
                    <button type="button" className="btn btn-success" onClick={() => { this.fetchFilm(6) }}>Revenge of the Sith</button>
                    <button type="button" className="btn btn-primary" onClick={() => { this.fetchFilm(7) }}>The Force Awakens</button>
                </section>
                <hr />
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Characters: </h1>
                            <hr />
                            <Character />
                        </div>
                        <div className="col-md-6">
                            <h1>Planets: </h1>
                            <hr />
                            <Planet />
                        </div>
                        <div className="col-md-6">
                            <h1>Vehicles: </h1>
                            <hr />
                            <Vehicle />
                        </div>
                        <div className="col-md-6">
                            <h1>Starships: </h1>
                            <hr />
                            <Starship />
                        </div>
                    </div>
                </div>
             </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        film: state.film,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilm: movie => dispatch(Actions.fetchFilmAsync(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);