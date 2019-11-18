import {createSelector} from 'reselect';

const getOffers = (state) => state.appActions.offers;
const getCity = (state) => state.userActions.city;

export const getCurrentCityOffers = createSelector(
    [getOffers, getCity],
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city);
    }
);
