import {ActionType} from '../../constants';

const initialState = {
  offers: [],
  login: null,
  reviews: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload
      });
    case ActionType.ADD_LOGIN:
      return Object.assign({}, state, {
        login: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload
      });
    default:
      return state;
  }
};

export default appReducer;

