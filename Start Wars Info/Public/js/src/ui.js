import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
//import ActionInfo from 'material-ui/svg-icons/action/info';


const Item = ({ text }) => (
    <div>
        <ListItem>
            <Link to={`/`}>{text}</Link>
        </ListItem>
        <Divider />
    </div>
);

class Example extends React.Component {

    render() {
        const items = this.props.characters.map((item, index) => <Item key={index} text={item.name} />)
        return (
            <div className="container">
                <h1>Characters:</h1>
                <MuiThemeProvider>
                    <div>
                        <List>
                            {items}
                        </List>
                    </div>
                </MuiThemeProvider>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);