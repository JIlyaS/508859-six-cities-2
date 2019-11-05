import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {allOffers} from './mocks/offers';
import {reducer} from './reducer/reducer';
import App from './components/app/app';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App allOffers={allOffers} />
    </Provider>,
    document.querySelector(`#root`)
);
