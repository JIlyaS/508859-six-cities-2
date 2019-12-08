import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from '../reducer/reducer';
import {configureAPI} from '../api';
import history from '../history';

const api = configureAPI(() => history.push(`/login`));

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

export default store;
