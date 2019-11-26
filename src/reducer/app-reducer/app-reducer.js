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
    case ActionType.UPDATE_FAVORITE_OFFER:
      return Object.assign({}, state, {
        offers: [...state.offers.slice(0, action.payload.id - 1), action.payload, ...state.offers.slice(action.payload.id)]
      });
    default:
      return state;
  }
};

export default appReducer;

