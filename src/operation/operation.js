import ActionCreator from '../action-creator/action-creator';
import Adapter from '../adapter';

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offers = Adapter.getOffers(response.data);
        dispatch(ActionCreator.changeCity(offers[0].city.name));
        dispatch(ActionCreator.loadOffers(offers));
      });
  },
  checkLogin: (email, password) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email,
      password
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(false));
        dispatch(ActionCreator.addLogin(response.data));
      });
  }
};

export default Operation;
