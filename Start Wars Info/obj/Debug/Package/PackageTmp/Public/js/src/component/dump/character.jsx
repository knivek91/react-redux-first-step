import React from 'react';
import { connect } from 'react-redux';

const Item = ({ name }) => (
    <li>{name}</li>
);

class Character extends React.Component {

    render() {
        const lis = this.props.characters.map((item, index) => <Item key={index} name={item.name} />);
        return ( 
            <section>   
                <ul>{lis}</ul>
            </section>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);