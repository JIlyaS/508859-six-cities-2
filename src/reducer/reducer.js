import {ActionType} from '../constants';
import {getCityOffers, getCorrectDataHotels} from '../utils';
// import {allOffers} from '../mocks/offers';

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: (allOfferList, city) => {
    const cityOffers = getCityOffers(allOfferList, city);
    return {
      type: ActionType.GET_OFFERS,
      payload: cityOffers,
    };
  },
  changeSortName: (sortName) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortName,
  }),
  changeActiveCard: (activeCard) => ({
    type: ActionType.ADD_ACTIVE_CARD,
    payload: activeCard,
  }),
  removeActiveCard: () => ({
    type: ActionType.REMOVE_ACTIVE_CARD,
    payload: {},
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  })
};

const initialState = {
  city: `Amsterdam`,
  offers: [],
  activeSortName: `Popular`,
  activeOfferCard: {},
  allOffers: [],
  cities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
        activeSortName: `Popular`,
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case ActionType.CHANGE_SORT:
      return Object.assign({}, state, {
        activeSortName: action.payload,
      });
    case ActionType.ADD_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeOfferCard: action.payload,
      });
    case ActionType.REMOVE_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeOfferCard: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      console.log(action.payload);
      return Object.assign({}, state, {
        allOffers: getCorrectDataHotels(action.payload),
        offers: getCorrectDataHotels(action.payload),
      });
  }

  return state;
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
};

export {
  ActionCreator,
  reducer,
  Operation,
};
