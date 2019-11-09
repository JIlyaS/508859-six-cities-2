import {DEFAULT_OFFERS, CHANGE_CITY, GET_OFFERS, CHANGE_SORT, CHANGE_SORT_LIST} from '../constants';
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
  changeSortList: (offerList, sortName) => {
    const offers = sortOfferList(offerList, sortName);
    return {
      type: CHANGE_SORT_LIST,
      payload: offers
    };
  }
};

const initialState = {
  city: `Amsterdam`,
  offers: DEFAULT_OFFERS,
  activeSortName: `Popular`,
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
        offers: action.payload
      });
    case CHANGE_SORT:
      return Object.assign({}, state, {
        activeSortName: action.payload
      });
    case CHANGE_SORT_LIST:
      console.log(state);
      return Object.assign({}, state, {
        offers: action.payload
      });
  }

  return state;
};

export {
  ActionCreator,
  reducer
};
