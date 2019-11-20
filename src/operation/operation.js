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
  },
  loadReviews: (idHotel) => (dispatch, _, api) => {
    return api.get(`/comments/${idHotel}`)
      .then((response) => {
        const reviews = Adapter.loadReviews(response.data);
        dispatch(ActionCreator.loadReviews(reviews));
      });
  },
  addReview: (idHotel, rating, comment) => (dispatch, _, api) => {
    return api.post(`/comments/${idHotel}`, {
      rating,
      comment
    })
      .then((response) => {
        const reviews = Adapter.loadReviews(response.data);
        dispatch(ActionCreator.loadReviews(reviews));
      });
  },
};

export default Operation;
