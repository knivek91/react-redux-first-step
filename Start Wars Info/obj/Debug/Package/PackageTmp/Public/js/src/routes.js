import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './component/smart/home';
import SearchCharacter from './component/smart/search-character';
import Layout from './component/smart/layout';

import UI from './ui';

export default (
    <div>
        <Route path={'/'} component={Layout} >
            <IndexRoute component={Home} />
        </Route>
        <Route path={'/search-character'} component={SearchCharacter} />
        <Route path={'/ui'} component={UI} />
    </div>
);