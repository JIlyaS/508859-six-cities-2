import {ActionType} from '../constants';
import Adapter from '../adapter';

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
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
  fetchOffersSuccess: (dataOffers) => {
    const offers = Adapter.getOffers(dataOffers);
    return {
      type: ActionType.FETCH_OFFERS_SUCCESS,
      payload: offers,
    };
  },
  fetchOffersRequest: () => ({
    type: ActionType.FETCH_OFFERS_REQUEST
  }),
  fetchOffersFailure: () => ({
    type: ActionType.FETCH_OFFERS_FAILURE
  }),
  fetchFavoritesRequest: () => ({
    type: ActionType.FETCH_FAVORITES_REQUEST
  }),
  fetchFaviritesSuccess: (dataFavorites) => {
    const offers = Adapter.getOffers(dataFavorites);
    return {
      type: ActionType.FETCH_FAVORITES_SUCCESS,
      payload: offers,
    };
  },
  fetchFavoritesFailure: () => ({
    type: ActionType.FETCH_FAVORITES_FAILURE
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
  submitForm: () => ({
    type: ActionType.FORM_SUBMISSION,
    payload: {
      blockedInput: true,
      blockedSubmit: true,
      submit: false,
      error: false
    },
  }),
  submitFormSuccess: () => ({
    type: ActionType.FORM_SUBMISSION_SUCCESS,
    payload: {
      blockedInput: false,
      blockedSubmit: false,
      submit: true,
      error: false
    },
  }),
  submitFormError: () => ({
    type: ActionType.FORM_SUBMISSION_ERROR,
    payload: {
      blockedInput: false,
      blockedSubmit: false,
      submit: false,
      error: true
    },
  }),
  submitFormDefault: () => ({
    type: ActionType.FORM_SUBMISSION_DEFAULT,
    payload: {
      blockedInput: false,
      blockedSubmit: true,
      submit: false,
      error: false
    },
  }),
};

export default ActionCreator;
