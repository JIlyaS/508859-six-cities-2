import ActionCreator from '../action-creator/action-creator';

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    dispatch(ActionCreator.requestOffers());
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.changeCity(response.data[0].city.name));
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
  loadFavorites: () => (dispatch, _, api) => {
    dispatch(ActionCreator.requestFavorites());
    return api.get(`/favorite`)
      .then((response) => {
        if (response) {
          dispatch(ActionCreator.loadFavorites(response.data));
        }
      });
  },
  changeOfferFavorite: (hotelId, status) => (dispatch, _, api) => {
    return api.post(`/favorite/${hotelId}/${status}`, {})
      .then((response) => {
        dispatch(ActionCreator.updateFavoriteOffer(response.data));
        dispatch(Operation.loadFavorites());
      });
  },
  checkLogin: (email, password) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email,
      password
    })
      .then((response) => {
        const serializeLogin = JSON.stringify(response.data);
        localStorage.setItem(`login`, serializeLogin);

        dispatch(ActionCreator.requireAuthorization(false));
        dispatch(ActionCreator.addLogin(response.data));
      });
  },
  getLogin: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response) {
          dispatch(ActionCreator.requireAuthorization(false));
          dispatch(ActionCreator.addLogin(response.data));
        }
      });
  },
  loadReviews: (hotelId) => (dispatch, _, api) => {
    return api.get(`/comments/${hotelId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
  addReview: (hotelId, rating, comment) => (dispatch, _, api) => {
    return api.post(`/comments/${hotelId}`, {
      rating,
      comment
    })
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
};

export default Operation;
