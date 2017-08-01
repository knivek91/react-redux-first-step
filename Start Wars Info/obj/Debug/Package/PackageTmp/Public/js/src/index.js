import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';

import configureStore from './store/';

const initialState = {
    film: {
        title: 'Select A Movie', characters: [], planets: [], starships: []
        , vehicles: [], species: []
    }, isLoading: false
};

const store = configureStore(initialState);

/**
	Not only do we wrap with Provider, 
	we can now provide the store to the Provider that will in turn give the descendants of the this entry component access to the store.
*/
injectTapEventPlugin(); // for touch events for react
render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('app')
);