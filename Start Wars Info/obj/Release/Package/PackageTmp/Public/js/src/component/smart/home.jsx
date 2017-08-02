import React from 'react';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import * as Actions from '../../action/filmAction';
import * as ActionsPlanet from '../../action/planetAction';
import * as ActionsVehicles from '../../action/vehiclesAction';
import * as ActionsStarship from '../../action/starshipAction';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Character from '../dump/character';
import Planet from '../dump/planet';
import Vehicle from '../dump/vehicles';
import Starship from '../dump/starships';

const Item = ({ text }) => (
    <div className="col-md-3 col-sm-12">
        <ListItem>
            <Link to={`/`}> {text} </Link>
        </ListItem>
        <Divider />
    </div>
);

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.fetchFilm = this.fetchFilm.bind(this);
        this.goToSearch = this.goToSearch.bind(this);
    }

    fetchFilm(id) {
        this.props.fetchFilm(id);
    }

    goToSearch() {
        this.props.cleanCharacters([]);
        this.props.cleanPlanets([]);
        this.props.cleanVehicles([]);
        //this.props.cleanStarShips([]);
        //browserHistory.push('/search-character');
        this.props.goToSearch();
    }

    render() {
        const { film, isLoading } = this.props
        if (isLoading)
            return <h1>Loading . . . </h1>

        const characters = this.props.characters.map((item, index) => <Item key={index} text={item.name} />)
        const planets = this.props.planets.map((item, index) => <Item key={index} text={item.name} />)
        const vehicles = this.props.vehicles.map((item, index) => <Item key={index} text={item.name} />)
        const starships = this.props.starships.map((item, index) => <Item key={index} text={item.name} />)

        return (
            <div className="container">
                <button type="button" className="btn btn-warning" onClick={this.goToSearch}>Search Character</button>
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
                    <MuiThemeProvider>
                        <div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center">Characters</h1>
                                    <hr />
                                    <List>
                                        {characters}
                                    </List>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center">Planets</h1>
                                    <hr />
                                    <List>
                                        {planets}
                                    </List>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center">Vehicles</h1>
                                    <hr />
                                    <List>
                                        {vehicles}
                                    </List>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center">Starships</h1>
                                    <hr />
                                    <List>
                                        {starships}
                                    </List>
                                </div>
                            </div>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        film: state.film,
        isLoading: state.isLoading,
        characters: state.characters,
        planets: state.planets,
        vehicles: state.vehicles,
        starships: state.starships
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilm: movie => dispatch(Actions.fetchFilmAsync(movie)),
        cleanCharacters: item => dispatch(Actions.cleanCharacters(item)),
        cleanPlanets: item => dispatch(ActionsPlanet.cleanPlanets(item)),
        cleanVehicles: item => dispatch(ActionsVehicles.cleanVehicles(item)),
        cleanStarships: item => dispatch(ActionsStarship.cleanStarships(item)),
        goToSearch: () => { dispatch(push('/search-character')); } // change this for be in an action to separate logics for display and bussines logic (actions)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);