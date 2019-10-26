import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/main';
import {offers} from './mocks/offers';

ReactDOM.render(<Main
  offers={offers}
/>, document.querySelector(`#root`));
