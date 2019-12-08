import MockAdapter from 'axios-mock-adapter';

import {
  MOCK_DATA_SERVER,
  MOCK_DATA_ADAPTER,
  DEFAULT_LOGIN,
  MOCK_DATA_COMMENTS_SERVER,
  MOCK_DATA_COMMENTS_ADAPTER,
  MOCK_DATA_UPDATED_FAVORITE_SERVER,
  DEFAULT_OFFER_UPDATED_FAVORITE_SERVER,
  DEFAULT_OFFER_UPDATED_FAVORITE,
  MOCK_DATA_UPDATED_FAVORITE,
  ActionType,
  OperationMock
} from '../constants';
import {configureAPI} from '../api';
import Operation from '../operation/operation';

describe(`Reducer load data work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loadOffers = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(OperationMock.STATUS, MOCK_DATA_SERVER);

    return loadOffers(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.FETCH_OFFERS_REQUEST,
        payload: true
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.CHANGE_CITY,
        payload: OperationMock.CITY
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.FETCH_OFFERS_SUCCESS,
        payload: MOCK_DATA_ADAPTER
      });
    });
  });

  it(`Should make a correct post API call to /favorite`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loadFavorites = Operation.loadFavorites();

    apiMock.onGet(`/favorite`).reply(OperationMock.STATUS, MOCK_DATA_UPDATED_FAVORITE_SERVER);

    return loadFavorites(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_FAVORITES_REQUEST,
          payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FETCH_FAVORITES_SUCCESS,
          payload: MOCK_DATA_UPDATED_FAVORITE
        });
      });
  });

  it(`Should make a correct get API call to /comments/:idHotel`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loadReviews = Operation.loadReviews(OperationMock.ID_HOTEL);

    apiMock
      .onGet(`/comments/1`)
      .reply(OperationMock.STATUS, MOCK_DATA_COMMENTS_SERVER);

    return loadReviews(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_REVIEWS,
        payload: MOCK_DATA_COMMENTS_ADAPTER
      });
    });
  });

  it(`Should make a correct get API call to /login`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const getLogin = Operation.getLogin();

    apiMock
      .onGet(`/login`)
      .reply(OperationMock.STATUS, DEFAULT_LOGIN);

    return getLogin(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: false
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.ADD_LOGIN,
        payload: DEFAULT_LOGIN
      });
    });
  });
});

describe(`Reducer post data work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const checkLogin = Operation.checkLogin(OperationMock.EMAIL, OperationMock.PASSWORD);

    apiMock.onPost(`/login`).reply(OperationMock.STATUS, DEFAULT_LOGIN);

    return checkLogin(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: false
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADD_LOGIN,
          payload: DEFAULT_LOGIN
        });
      });
  });

  it(`Should make a correct post API call to /comments/:idHotel`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const addReview = Operation.addReview(
        OperationMock.ID_HOTEL,
        OperationMock.RATING,
        OperationMock.COMMENT
    );

    apiMock.onPost(`/comments/1`).reply(OperationMock.STATUS, MOCK_DATA_COMMENTS_SERVER);

    return addReview(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FORM_SUBMISSION,
          payload: {
            blockedInput: true,
            blockedSubmit: true,
            error: false,
            submit: false
          }
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_REVIEWS,
          payload: MOCK_DATA_COMMENTS_ADAPTER
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.FORM_SUBMISSION_SUCCESS,
          payload: {
            blockedInput: false,
            blockedSubmit: false,
            error: false,
            submit: true
          }
        });
      });
  });

  it(`Should make a correct post API call to /favorite/:hotelId/:status`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const changeOfferFavorite = Operation.changeOfferFavorite(
        OperationMock.ID_HOTEL,
        OperationMock.FAVORITE_STATUS
    );

    apiMock.onPost(`/favorite/1/1`).reply(OperationMock.STATUS, DEFAULT_OFFER_UPDATED_FAVORITE_SERVER);

    return changeOfferFavorite(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITE_OFFER,
          payload: DEFAULT_OFFER_UPDATED_FAVORITE
        });
      });
  });
});
