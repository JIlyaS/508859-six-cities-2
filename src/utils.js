import {RATING_PERSENT, MAX_RATING_COUNT, SortNames} from './constants';

export const firstUpperCase = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

export const convertRating = (rating) => {
  return rating * RATING_PERSENT / MAX_RATING_COUNT;
};

export const getCityOffers = (allOffers, city) => {
  return allOffers.filter((offer) => offer.city.name === city);
};

export const sortOfferList = (offers, sortName) => {
  switch (sortName) {
    case SortNames.POPULAR:
      return offers.slice();
    case SortNames.PRICE_LH:
      return offers.slice().sort((prev, curr) => prev.price - curr.price);
    case SortNames.PRICE_HL:
      return offers.slice().sort((prev, curr) => curr.price - prev.price);
    case SortNames.TOP_RATED:
      return offers.slice().sort((prev, curr) => curr.rating - prev.rating);
    default:
      throw new Error(`Undefined SortName element`);
  }
};

export const getMapCoordinates = (offers, activeOfferCard) => {
  if (Object.keys(activeOfferCard).length === 0) {
    return offers.map((offer) => offer.location);
  }
  const otherOfferCards = offers.filter((offer) => offer.id !== activeOfferCard.id);
  return otherOfferCards.map((offer) => offer.location);
};

export const getCurrectCityOffers = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const getActiveCityCoordinate = (offers) => ({
  coordinateCity: offers[0].city.location,
});
