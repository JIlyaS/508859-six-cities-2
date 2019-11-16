import MockAdapter from 'axios-mock-adapter';

import {DEFAULT_OFFERS, SortNames, ActionType} from '../constants';
import {getCityOffers, sortOfferList} from '../utils';
import api from '../api';
import Operation from '../operation/operation';

const mockApi = jest.genMockFromModule(`../api`);

mockApi.get = jest.fn(() => {
  return Promise.resolve({
    data: [{fake: true}]
  });
});

describe(`Business logic is correct`, () => {
  it(`Get offers is correctly`, () => {
    expect(getCityOffers(DEFAULT_OFFERS, `Amsterdam`)).toEqual(DEFAULT_OFFERS);

    expect(getCityOffers([{
      id: `id0`,
      city: {
        name: `Amsterdam`,
      }
    },
    {
      id: `id1`,
      city: {
        name: `Paris`,
      }
    }], `Cologne`)).toEqual([]);
  });

  expect(sortOfferList(DEFAULT_OFFERS, SortNames.POPULAR)).toEqual(DEFAULT_OFFERS);

  expect(sortOfferList([{
    id: `id0`,
    city: {
      name: `Paris`,
    },
    rating: 3.2
  },
  {
    id: `id1`,
    city: {
      name: `Paris`,
    },
    rating: 4.8
  }], SortNames.TOP_RATED)).toEqual([{
    id: `id1`,
    city: {
      name: `Paris`,
    },
    rating: 4.8
  },
  {
    id: `id0`,
    city: {
      name: `Paris`,
    },
    rating: 3.2
  }]);
});


describe(`Reducer load data work correctly`, () => {
  it(`Should make a correct API call to /hotel`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offerLoader(dispatch, jest.fn(), mockApi)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}]
        });
      });
  });
});
