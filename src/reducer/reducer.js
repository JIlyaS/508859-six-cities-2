import {DEFAULT_OFFERS, CHANGE_CITY, GET_OFFERS} from '../constants';
import {getCityOffers} from '../utils';
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
  }
};

const initialState = {
  city: `Amsterdam`,
  offers: DEFAULT_OFFERS,
  allOffers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
    case GET_OFFERS:
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
