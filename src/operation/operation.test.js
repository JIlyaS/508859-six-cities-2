import MockAdapter from 'axios-mock-adapter';

import {MOCK_DATA_SERVER, MOCK_DATA_ADAPTER, ActionType} from '../constants';
import api from '../api';
import Operation from '../operation/operation';

const mockApi = jest.genMockFromModule(`../api`);

mockApi.get = jest.fn(() => {
  return Promise.resolve({
    data: MOCK_DATA_SERVER
  });
});

describe(`Reducer load data work correctly`, () => {
  it(`Should make a correct API call to /hotel`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, MOCK_DATA_SERVER);

    return offerLoader(dispatch, null, mockApi)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: MOCK_DATA_ADAPTER
        });
      });
  });
});
