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

export const sortOfferList = (offers, originalOffers, sortName) => {
  switch (sortName) {
    case SortNames.POPULAR:
      return originalOffers.slice();
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
  let otherOfferCards = offers.filter((offer) => offer.id !== activeOfferCard.id);
  let coordinates = otherOfferCards.map((offer) => offer.coordinate);
  if (Object.keys(activeOfferCard).length === 0) {
    coordinates = offers.map((offer) => offer.coordinate);
  } else {
    otherOfferCards = offers.filter((offer) => offer.id !== activeOfferCard.id);
    coordinates = otherOfferCards.map((offer) => offer.coordinate);
  }

  return coordinates;
};
