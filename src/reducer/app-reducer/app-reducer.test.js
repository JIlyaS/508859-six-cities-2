import {DEFAULT_OFFERS} from '../../constants';
import reducer from './app-reducer';

describe(`Reducer work correctly`, () => {
  it(`Reducer load data without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      offers: [],
      login: null,
    });
  });
  it(`Reducer should load offers by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
    }, {
      type: `LOAD_OFFERS`,
      payload: DEFAULT_OFFERS
    })).toEqual({
      offers: DEFAULT_OFFERS,
      login: null,
    });
  });
  it(`Reducer should load offers empty array by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
    }, {
      type: `LOAD_OFFERS`,
      payload: []
    })).toEqual({
      offers: [],
      login: null,
    });
  });
  it(`Reducer should add login by a given value`, () => {
    expect(reducer({
      offers: DEFAULT_OFFERS,
      login: null,
    }, {
      type: `ADD_LOGIN`,
      payload: DEFAULT_LOGIN
    })).toEqual({
      offers: DEFAULT_OFFERS,
      login: DEFAULT_LOGIN,
    });
  });
  it(`Reducer should add login empty array by a given value`, () => {
    expect(reducer({
      offers: DEFAULT_OFFERS,
      login: DEFAULT_LOGIN,
    }, {
      type: `ADD_LOGIN`,
      payload: null
    })).toEqual({
      offers: DEFAULT_OFFERS,
      login: null,
    });
  });
});
