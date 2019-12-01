import {ActionType} from '../../constants';

const initialState = {
  isOffersFetching: false,
  isFavoritesFetching: false,
  offers: [],
  login: null,
  reviews: [],
  favorites: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
        isOffersFetching: false,
      });
    case ActionType.REQUEST_OFFERS:
      return Object.assign({}, state, {
        isOffersFetching: true
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
    case ActionType.LOAD_FAVORITES:
      return Object.assign({}, state, {
        favorites: action.payload,
        isFavoritesFetching: false,
      });
    case ActionType.REQUEST_FAVORITES:
      return Object.assign({}, state, {
        isFavoritesFetching: true
      });
    default:
      return state;
  }
};

export default appReducer;

