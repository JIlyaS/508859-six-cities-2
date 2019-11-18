import {ActionType} from '../../constants';

const initialState = {
  city: `Hamburg`,
  changedOffers: [],
  activeSortName: `Popular`,
  activeOfferCard: {},
  cities: [],
};

const userActions = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
        activeSortName: `Popular`
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        changedOffers: action.payload
      });
    case ActionType.CHANGE_SORT:
      return Object.assign({}, state, {
        activeSortName: action.payload
      });
    case ActionType.ADD_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeOfferCard: action.payload
      });
    case ActionType.REMOVE_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeOfferCard: action.payload
      });
    default:
      return state;
  }
};

export default userActions;
