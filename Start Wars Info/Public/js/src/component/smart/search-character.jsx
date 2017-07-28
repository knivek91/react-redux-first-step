import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as Actions from '../../action/filmAction';

const Character = ({ id, name }) => (
    <li> <Link to={`/character/${id}`}> {name} </Link> </li>
);

class SearchCharacter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.searchCharacters(this.state.text);
    }

    render() {

        const lis = this.props.characters.map((character, index) => <Character key={index} id={character.url.substring(character.url.length - 2, character.url.length - 1)} name={character.name} />)

        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <input type="search" name="text" placeholder="Character Name" onChange={this.onChange.bind(this)} className="form-control input-lg text-center" />
                            </form>

                        </div>
                    </div>
                    <h1>Result:</h1>
                    <ul> {lis} </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchCharacters: text => dispatch(Actions.searchCharactersAsync(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCharacter);