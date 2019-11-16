import {combineReducers} from 'redux';

import actionUser from './action-user/action-user';
import loadData from './load-data/load-data';

const reducer = combineReducers({
  actionUser,
  loadData
});

export default reducer;
