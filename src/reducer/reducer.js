import {DEFAULT_OFFERS, actionType} from '../constants';
import {getCityOffers} from '../utils';
import {allOffers} from '../mocks/offers';

const ActionCreator = {
  changeCity: (city) => ({
    type: actionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: (allOfferList, city) => {
    const cityOffers = getCityOffers(allOfferList, city);
    return {
      type: actionType.GET_OFFERS,
      payload: cityOffers
    };
  },
  changeSortName: (sortName) => ({
    type: actionType.CHANGE_SORT,
    payload: sortName
  }),
  changeActiveCard: (activeCard) => ({
    type: actionType.ADD_ACTIVE_CARD,
    payload: activeCard
  }),
  removeActiveCard: () => ({
    type: actionType.REMOVE_ACTIVE_CARD,
    payload: {}
  })
};

const initialState = {
  city: `Amsterdam`,
  offers: DEFAULT_OFFERS,
  activeSortName: `Popular`,
  activeOfferCard: {},
  allOffers: allOffers.offers,
  cities: allOffers.cities
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
        activeSortName: `Popular`
      });
    case actionType.GET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload
      });
    case actionType.CHANGE_SORT:
      return Object.assign({}, state, {
        activeSortName: action.payload
      });
    case actionType.ADD_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeOfferCard: action.payload
      });
    case actionType.REMOVE_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeOfferCard: action.payload
      });
  }

  return state;
};

export {
  ActionCreator,
  reducer
};
