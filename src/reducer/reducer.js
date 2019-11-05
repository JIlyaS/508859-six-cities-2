import {DEFAULT_OFFERS} from '../constants';
import {getCityOffers} from '../utils';

const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city
  }),
  getOffers: (allOffers, city) => {
    const cityOffers = getCityOffers(allOffers, city);
    return {
      type: `GET_OFFERS`,
      payload: cityOffers
    };
  }
};

const initialState = {
  city: `Amsterdam`,
  offers: DEFAULT_OFFERS
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {
        city: action.payload
      });
    case `GET_OFFERS`:
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
