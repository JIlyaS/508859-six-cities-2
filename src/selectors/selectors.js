import {createSelector} from 'reselect';

const getOffers = (state) => state.appReducer.offers;
const getCity = (state) => state.userReducer.city;

export const getCurrentCityOffers = createSelector(
    [getOffers, getCity],
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city);
    }
);
