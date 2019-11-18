import {DEFAULT_OFFERS, SortNames} from '../constants';
import {getCityOffers, sortOfferList} from '../utils';

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

