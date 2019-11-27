import {
  DEFAULT_OFFERS,
  DEFAULT_LOGIN,
  DEFAULT_REVIEW,
  MOCK_DATA_ADAPTER,
  MOCK_DATA_UPDATED_FAVORITE,
  DEFAULT_OFFER_UPDATED_FAVORITE
} from '../../constants';
import reducer from './app-reducer';

describe(`Reducer work correctly`, () => {
  it(`Reducer load data without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
    });
  });
  it(`Reducer should load offers by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
    }, {
      type: `LOAD_OFFERS`,
      payload: DEFAULT_OFFERS
    })).toEqual({
      offers: DEFAULT_OFFERS,
      login: null,
      reviews: [],
      favorites: [],
    });
  });
  it(`Reducer should load offers empty array by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
    }, {
      type: `LOAD_OFFERS`,
      payload: []
    })).toEqual({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
    });
  });
  it(`Reducer should add login by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
    }, {
      type: `ADD_LOGIN`,
      payload: DEFAULT_LOGIN
    })).toEqual({
      offers: [],
      login: DEFAULT_LOGIN,
      reviews: [],
      favorites: [],
    });
  });
  it(`Reducer should add login empty array by a given value`, () => {
    expect(reducer({
      offers: [],
      login: DEFAULT_LOGIN,
      reviews: [],
      favorites: [],
    }, {
      type: `ADD_LOGIN`,
      payload: null
    })).toEqual({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
    });
  });
  it(`Reducer should load reviews by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
    }, {
      type: `LOAD_REVIEWS`,
      payload: DEFAULT_REVIEW
    })).toEqual({
      offers: [],
      login: null,
      reviews: DEFAULT_REVIEW,
      favorites: [],
    });
  });
  it(`Reducer should load reviews empty array by a given value`, () => {
    expect(reducer({
      offers: DEFAULT_OFFERS,
      login: DEFAULT_LOGIN,
      reviews: [],
      favorites: [],
    }, {
      type: `LOAD_REVIEWS`,
      payload: null
    })).toEqual({
      offers: DEFAULT_OFFERS,
      login: DEFAULT_LOGIN,
      reviews: null,
      favorites: [],
    });
  });
  it(`Reducer should update offer by a given value`, () => {
    expect(reducer({
      offers: MOCK_DATA_ADAPTER,
      login: null,
      reviews: [],
      favorites: [],
    }, {
      type: `UPDATE_FAVORITE_OFFER`,
      payload: DEFAULT_OFFER_UPDATED_FAVORITE
    })).toEqual({
      offers: MOCK_DATA_UPDATED_FAVORITE,
      login: null,
      reviews: [],
      favorites: [],
    });
  });
  it(`Reducer should load favorites by a given value`, () => {
    expect(reducer({
      offers: MOCK_DATA_UPDATED_FAVORITE,
      login: null,
      reviews: [],
      favorites: [],
    }, {
      type: `LOAD_FAVORITES`,
      payload: MOCK_DATA_UPDATED_FAVORITE
    })).toEqual({
      offers: MOCK_DATA_UPDATED_FAVORITE,
      login: null,
      reviews: [],
      favorites: MOCK_DATA_UPDATED_FAVORITE,
    });
  });
  it(`Reducer should load favorites empty array by a given value`, () => {
    expect(reducer({
      offers: MOCK_DATA_ADAPTER,
      login: null,
      reviews: [],
      favorites: [],
    }, {
      type: `LOAD_FAVORITES`,
      payload: []
    })).toEqual({
      offers: MOCK_DATA_ADAPTER,
      login: null,
      reviews: [],
      favorites: [],
    });
  });
});
