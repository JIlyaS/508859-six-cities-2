import {combineReducers} from 'redux';

import userReducer from './user-reducer/user-reducer';
import appReducer from './app-reducer/app-reducer';

const reducer = combineReducers({
  userReducer,
  appReducer
});

export default reducer;
