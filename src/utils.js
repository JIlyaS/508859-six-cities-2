import {store} from 'react-notifications-component';
import {RATING_PERSENT, MAX_RATING_COUNT, MAX_NEARBY_OFFER, SortName, PageName, OfferCardName} from './constants';

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
    case SortName.POPULAR:
      return offers.slice();
    case SortName.PRICE_LH:
      return offers.slice().sort((prev, curr) => prev.price - curr.price);
    case SortName.PRICE_HL:
      return offers.slice().sort((prev, curr) => curr.price - prev.price);
    case SortName.TOP_RATED:
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

export const getActiveCityCoordinate = (offers) => {
  if (offers.length === 0) {
    return ``;
  }
  return {
    cityCoordinates: offers[0].city.location,
  };
};

export const getOtherCityOffers = (id, offers) => {
  const currentOffer = offers.find((offer) => offer.id === Number(id));
  const otherOffers = offers
    .filter((offer) => offer.city.name === currentOffer.city.name)
    .filter((offer) => offer.id !== currentOffer.id)
    .slice(0, MAX_NEARBY_OFFER);

  return otherOffers;
};

export const getClassPageName = (pageName) => {
  switch (pageName) {
    case PageName.SIGN:
      return `page page--gray page--login`;
    case PageName.MAIN:
      return `page page--gray page--main`;
    case PageName.DETAIL:
      return `page`;
    case PageName.FAVORITES:
      return `page`;
    case PageName.FAVORITES_EMPTY:
      return `page page--favorites-empty`;
    default:
      return null;
  }
};

export const getClassOfferCardName = (offerCardName) => {
  switch (offerCardName) {
    case OfferCardName.MAIN_OFFER:
      return {
        list: `cities__places-list places__list tabs__content`,
        card: `cities__place-`,
        wrapper: `cities`,
        info: ``,
      };
    case OfferCardName.DETAIL_OFFER:
      return {
        list: `near-places__list places__list`,
        card: `near-places__`,
        wrapper: `near-places`,
        info: ``,
      };
    case OfferCardName.FAVORITE_OFFER:
      return {
        card: `favorites__`,
        wrapper: `favorites`,
        info: `favorites__card-info`,
      };
    default:
      return null;
  }
};

export const getLocalStorageLogin = () => {
  return JSON.parse(localStorage.getItem(`login`));
};

export const getNotificationError = (error) => {
  store.addNotification({
    title: `Error! Server is not available!`,
    message: `${error}`,
    type: `danger`,
    container: `bottom-left`,
    animationIn: [`animated`, `fadeIn`],
    animationOut: [`animated`, `fadeOut`],
    dismiss: {
      duration: 5000,
      pauseOnHover: true,
    }
  });
};
