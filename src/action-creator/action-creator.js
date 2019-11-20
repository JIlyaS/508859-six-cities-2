import {ActionType} from '../constants';
import {getCityOffers} from '../utils';

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
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
};

export default ActionCreator;
