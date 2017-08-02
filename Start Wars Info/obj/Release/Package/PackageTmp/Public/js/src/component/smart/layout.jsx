import React from 'react';

import Home from './home';

class Layout extends React.Component {

    render() {
        return <Home props={this.props} />;
    }

}

export default Layout;