import {createSelector} from 'reselect';

const getOffers = (state) => state.loadData.offers;
const getCity = (state) => state.actionUser.city;

export const getCurrectCityOffers = createSelector(
    [getOffers, getCity],
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city);
    }
);
