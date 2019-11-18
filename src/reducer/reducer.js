import {combineReducers} from 'redux';

import userActions from './user-actions/user-actions';
import appActions from './app-actions/app-actions';

const reducer = combineReducers({
  userActions,
  appActions
});

export default reducer;
