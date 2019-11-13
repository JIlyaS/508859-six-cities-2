import {DEFAULT_OFFERS, DEFAULT_OFFER, SortNames} from '../constants';
import {getCityOffers, sortOfferList} from '../utils';
import {allOffers} from '../mocks/offers';
import {
  ActionCreator,
  reducer
} from './reducer';

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

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: `CHANGE_CITY`,
      payload: `Paris`
    });
  });
  it(`Action creator for get offers for city returns action with fill array payload`, () => {
    expect(ActionCreator.getOffers([{
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
    }], `Paris`)).toEqual({
      type: `GET_OFFERS`,
      payload: [
        {
          id: `id1`,
          city: {
            name: `Paris`,
          }
        }
      ]
    });
  });
  it(`Action creator for get offers for city returns action with empty array payload`, () => {
    expect(ActionCreator.getOffers([{
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
    }], `Cologne`)).toEqual({
      type: `GET_OFFERS`,
      payload: []
    });
  });
  it(`Action creator for get offers for city returns action with empty array payload`, () => {
    expect(ActionCreator.getOffers([], `Cologne`)).toEqual({
      type: `GET_OFFERS`,
      payload: []
    });
  });
  it(`Action creator for change sort name returns action with value payload`, () => {
    expect(ActionCreator.changeSortName(`Top rated first`)).toEqual({
      type: `CHANGE_SORT`,
      payload: `Top rated first`
    });
  });
  it(`Action creator for add active card returns action with object data payload`, () => {
    expect(ActionCreator.changeActiveCard({
      id: `id0`,
      city: {
        name: `Amsterdam`,
      },
      coordinate: [52.3909553943508, 4.85309666406198],
    })).toEqual({
      type: `ADD_ACTIVE_CARD`,
      payload: {
        id: `id0`,
        city: {
          name: `Amsterdam`,
        },
        coordinate: [52.3909553943508, 4.85309666406198],
      }
    });
  });
  it(`Action creator for add active card returns action with empty object payload`, () => {
    expect(ActionCreator.changeActiveCard({})).toEqual({
      type: `ADD_ACTIVE_CARD`,
      payload: {}
    });
  });
  it(`Action creator for remove active card returns action with empty object payload`, () => {
    expect(ActionCreator.removeActiveCard()).toEqual({
      type: `REMOVE_ACTIVE_CARD`,
      payload: {}
    });
  });
});

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      allOffers: allOffers.offers,
      cities: allOffers.cities,
    });
  });
  it(`Reducer should change city by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      allOffers: allOffers.offers,
      cities: allOffers.cities
    }, {
      type: `CHANGE_CITY`,
      payload: `Paris`
    })).toEqual({
      city: `Paris`,
      offers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      allOffers: allOffers.offers,
      cities: allOffers.cities
    });
  });
  it(`Reducer should get offers city by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      allOffers: allOffers.offers,
      cities: allOffers.cities
    }, {
      type: `GET_OFFERS`,
      payload: [{
        id: `id1`,
        city: {
          name: `Paris`,
        }
      }]
    })).toEqual({
      city: `Amsterdam`,
      offers: [{
        id: `id1`,
        city: {
          name: `Paris`,
        }
      }],
      activeSortName: `Popular`,
      activeOfferCard: {},
      allOffers: allOffers.offers,
      cities: allOffers.cities
    });
  });
  it(`Reducer should get offers city empty array by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      allOffers: allOffers.offers,
      cities: allOffers.cities
    }, {
      type: `GET_OFFERS`,
      payload: []
    })).toEqual({
      city: `Amsterdam`,
      offers: [],
      activeSortName: `Popular`,
      activeOfferCard: {},
      allOffers: allOffers.offers,
      cities: allOffers.cities
    });
  });
  it(`Reducer should change sort name by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      allOffers: allOffers.offers,
      cities: allOffers.cities
    }, {
      type: `CHANGE_SORT`,
      payload: `Top rated first`
    })).toEqual({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS,
      activeSortName: `Top rated first`,
      activeOfferCard: {},
      allOffers: allOffers.offers,
      cities: allOffers.cities
    });
  });
  it(`Reducer should add active card object data by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      allOffers: allOffers.offers,
      cities: allOffers.cities
    }, {
      type: `ADD_ACTIVE_CARD`,
      payload: DEFAULT_OFFER
    })).toEqual({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      allOffers: allOffers.offers,
      cities: allOffers.cities
    });
  });
  it(`Reducer should remove active card empty by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      allOffers: allOffers.offers,
      cities: allOffers.cities
    }, {
      type: `REMOVE_ACTIVE_CARD`,
      payload: {}
    })).toEqual({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      allOffers: allOffers.offers,
      cities: allOffers.cities
    });
  });
});
