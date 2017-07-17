import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './component/smart/home';
import Layout from './component/smart/layout';

export default (
<Route path="/" component={Layout} >
	<IndexRoute component={Home} />
</Route>
);