import ActionCreator from '../action-creator/action-creator';

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.changeCity(response.data[0].city.name));
        dispatch(ActionCreator.loadOffers(response.data));
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
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
  addReview: (idHotel, rating, comment) => (dispatch, _, api) => {
    return api.post(`/comments/${idHotel}`, {
      rating,
      comment
    })
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
};

export default Operation;
