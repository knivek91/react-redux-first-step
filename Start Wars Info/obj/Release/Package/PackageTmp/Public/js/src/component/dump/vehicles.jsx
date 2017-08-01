import React from 'react';
import { connect } from 'react-redux';

const Item = ({ name }) => (
    <li>{name}</li>
);

class Vehicles extends React.Component {

    render() {
        const lis = this.props.vehicles.map((item, index) => <Item key={index} name={item.name} />);
        return (
            <section>
                <ul>{lis}</ul>
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        vehicles: state.vehicles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);