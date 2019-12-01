import {ActionType} from '../constants';
import {getCityOffers} from '../utils';
import Adapter from '../adapter';

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: (allOfferList, city) => {
    const cityOffers = getCityOffers(allOfferList, city);
    return {
      type: ActionType.GET_OFFERS,
      payload: cityOffers,
    };
  },
  changeSortName: (sortName) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortName,
  }),
  changeActiveCard: (activeCard) => ({
    type: ActionType.ADD_ACTIVE_CARD,
    payload: activeCard,
  }),
  removeActiveCard: () => ({
    type: ActionType.REMOVE_ACTIVE_CARD,
    payload: {},
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  addLogin: (loginData) => ({
    type: ActionType.ADD_LOGIN,
    payload: loginData,
  }),
  loadOffers: (dataOffers) => {
    const offers = Adapter.getOffers(dataOffers);
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  requestOffers: () => ({
    type: ActionType.REQUEST_OFFERS
  }),
  loadFavorites: (dataFavorites) => {
    const offers = Adapter.getOffers(dataFavorites);
    return {
      type: ActionType.LOAD_FAVORITES,
      payload: offers,
    };
  },
  requestFavorites: () => ({
    type: ActionType.REQUEST_FAVORITES
  }),
  loadReviews: (dataReviews) => {
    const reviews = Adapter.loadReviews(dataReviews);
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
  updateFavoriteOffer: (updateOffer) => {
    const offer = Adapter.getOffer(updateOffer);
    return {
      type: ActionType.UPDATE_FAVORITE_OFFER,
      payload: offer,
    };
  },
};

export default ActionCreator;
