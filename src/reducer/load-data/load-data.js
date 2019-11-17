import {ActionType} from '../../constants';

const initialState = {
  offers: [],
  login: null,
};

const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case ActionType.ADD_LOGIN:
      return Object.assign({}, state, {
        login: action.payload,
      });
    default:
      return state;
  }
};

export default loadData;

