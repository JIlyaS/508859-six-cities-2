import {DEFAULT_OFFERS} from '../../constants';
import reducer from './load-data';

describe(`Reducer work correctly`, () => {
  it(`Reducer load data without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      offers: [],
    });
  });
  it(`Reducer should load offers by a given value`, () => {
    expect(reducer({
      offers: [],
    }, {
      type: `LOAD_OFFERS`,
      payload: DEFAULT_OFFERS
    })).toEqual({
      offers: DEFAULT_OFFERS
    });
  });
  it(`Reducer should load offers empty array by a given value`, () => {
    expect(reducer({
      offers: [],
    }, {
      type: `LOAD_OFFERS`,
      payload: []
    })).toEqual({
      offers: [],
    });
  });
});
