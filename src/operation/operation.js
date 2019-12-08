import ActionCreator from '../action-creator/action-creator';

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    dispatch(ActionCreator.fetchOffersRequest());
    return api.get(`/hotels`)
      .then((response) => {
        if (response) {
          dispatch(ActionCreator.changeCity(response.data[0].city.name));
          dispatch(ActionCreator.fetchOffersSuccess(response.data));
        }
      })
      .catch(() => {
        dispatch(ActionCreator.fetchOffersFailure());
      });
  },
  loadFavorites: () => (dispatch, _, api) => {
    dispatch(ActionCreator.fetchFavoritesRequest());
    return api.get(`/favorite`)
      .then((response) => {
        if (response) {
          dispatch(ActionCreator.fetchFavoritesSuccess(response.data));
        }
      });
  },
  changeOfferFavorite: (hotelId, status) => (dispatch, _, api) => {
    return api.post(`/favorite/${hotelId}/${status}`, {})
      .then((response) => {
        if (response) {
          dispatch(ActionCreator.updateFavoriteOffer(response.data));
          dispatch(Operation.loadFavorites());
        }
      });
  },
  checkLogin: (email, password) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email,
      password
    })
      .then((response) => {
        if (response) {
          const serializeLogin = JSON.stringify(response.data);
          localStorage.setItem(`login`, serializeLogin);

          dispatch(ActionCreator.requireAuthorization(false));
          dispatch(ActionCreator.addLogin(response.data));
        }
      });
  },
  getLogin: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response) {
          const serializeLogin = JSON.stringify(response.data);
          localStorage.setItem(`login`, serializeLogin);

          dispatch(ActionCreator.requireAuthorization(false));
          dispatch(ActionCreator.addLogin(response.data));
        }
      });
  },
  loadReviews: (hotelId) => (dispatch, _, api) => {
    return api.get(`/comments/${hotelId}`)
      .then((response) => {
        if (response) {
          dispatch(ActionCreator.loadReviews(response.data));
        }
      });
  },
  addReview: (hotelId, rating, comment) => (dispatch, _, api) => {
    dispatch(ActionCreator.submitForm());
    return api.post(`/comments/${hotelId}`, {
      rating,
      comment
    })
      .then((response) => {
        if (response) {
          dispatch(ActionCreator.loadReviews(response.data));
          dispatch(ActionCreator.submitFormSuccess());
        }
      })
      .catch(() => {
        dispatch(ActionCreator.submitFormError());
      });
  },
};

export default Operation;
