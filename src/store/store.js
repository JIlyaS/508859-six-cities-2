import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import compose from 'recompose/compose';

import reducers from '../reducer/reducer';
import {configureAPI} from '../api';

const api = configureAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        composeWithDevTools()
    )
);

export default store;
