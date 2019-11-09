import {DEFAULT_OFFERS, CHANGE_CITY, GET_OFFERS, CHANGE_SORT, CHANGE_SORT_LIST, ADD_ACTIVE_CARD, REMOVE_ACTIVE_CARD} from '../constants';
import {getCityOffers, sortOfferList} from '../utils';
import {allOffers} from '../mocks/offers';

const ActionCreator = {
  changeCity: (city) => ({
    type: CHANGE_CITY,
    payload: city
  }),
  getOffers: (allOfferList, city) => {
    const cityOffers = getCityOffers(allOfferList, city);
    return {
      type: GET_OFFERS,
      payload: cityOffers
    };
  },
  changeSortName: (sortName) => ({
    type: CHANGE_SORT,
    payload: sortName
  }),
  changeSortList: (offerList, originalOffers, sortName) => {
    const offers = sortOfferList(offerList, originalOffers, sortName);
    return {
      type: CHANGE_SORT_LIST,
      payload: offers
    };
  },
  changeActiveCard: (activeCard) => ({
    type: ADD_ACTIVE_CARD,
    payload: activeCard
  }),
  removeActiveCard: () => ({
    type: REMOVE_ACTIVE_CARD,
    payload: {}
  })
};

const initialState = {
  city: `Amsterdam`,
  offers: DEFAULT_OFFERS,
  originalOffers: DEFAULT_OFFERS,
  activeSortName: `Popular`,
  activeOfferCard: {},
  allOffers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
        activeSortName: `Popular`
      });
    case GET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
        originalOffers: action.payload
      });
    case CHANGE_SORT:
      return Object.assign({}, state, {
        activeSortName: action.payload
      });
    case CHANGE_SORT_LIST:
      return Object.assign({}, state, {
        offers: action.payload
      });
    case ADD_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeOfferCard: action.payload
      });
    case REMOVE_ACTIVE_CARD:
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
