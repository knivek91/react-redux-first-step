import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './component/smart/home';
import SearchCharacter from './component/smart/search-character';
import Layout from './component/smart/layout';

export default (
    <div>
        <Route path={'/'} component={Layout} >
            <IndexRoute component={Home} />
        </Route>
        <Route path={'/search-character'} component={SearchCharacter} />
    </div>
);