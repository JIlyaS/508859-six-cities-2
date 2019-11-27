import MockAdapter from 'axios-mock-adapter';

import {
  MOCK_DATA_SERVER,
  MOCK_DATA_ADAPTER,
  DEFAULT_LOGIN,
  MOCK_DATA_COMMENTS_SERVER,
  MOCK_DATA_COMMENTS_ADAPTER,
  MOCK_DATA_UPDATED_FAVORITE_SERVER,
  MOCK_DATA_UPDATED_FAVORITE,
  DEFAULT_COMMENT,
  ActionType
} from '../constants';
import {configureAPI} from '../api';
import Operation from '../operation/operation';

describe(`Reducer load data work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offerLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, MOCK_DATA_SERVER);

    return offerLoader(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_OFFERS,
        payload: MOCK_DATA_ADAPTER
      });
    });
  });

  it(`Should make a correct get API call to /comments/:idHotel`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offerLoader = Operation.loadReviews(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, MOCK_DATA_COMMENTS_SERVER);

    return offerLoader(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_REVIEWS,
        payload: MOCK_DATA_COMMENTS_ADAPTER
      });
    });
  });
});

describe(`Reducer post data work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offerLoader = Operation.checkLogin(`ilkolmakov@yandex.ru`, `123`);

    apiMock.onPost(`/login`).reply(200, DEFAULT_LOGIN);

    return offerLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
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
    const offerLoader = Operation.addReview(1, 3, DEFAULT_COMMENT);

    apiMock.onPost(`/comments/1`).reply(200, MOCK_DATA_COMMENTS_SERVER);

    return offerLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: MOCK_DATA_COMMENTS_ADAPTER
        });
      });
  });
  it(`Should make a correct post API call to /favorite`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offerLoader = Operation.loadFavorites();

    apiMock.onGet(`/favorite`).reply(200, MOCK_DATA_UPDATED_FAVORITE_SERVER);

    return offerLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: MOCK_DATA_UPDATED_FAVORITE
        });
      });
  });
});
