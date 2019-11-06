import {DEFAULT_OFFERS} from '../constants';
import {getCityOffers} from '../utils';
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
});

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS
    });
  });
  it(`Reducer should change city by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS
    }, {
      type: `CHANGE_CITY`,
      payload: `Paris`
    })).toEqual({
      city: `Paris`,
      offers: DEFAULT_OFFERS
    });
  });
  it(`Reducer should get offers city by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS
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
      }]
    });
  });

  it(`Reducer should get offers city empty array by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: DEFAULT_OFFERS
    }, {
      type: `GET_OFFERS`,
      payload: []
    })).toEqual({
      city: `Amsterdam`,
      offers: []
    });
  });
});
