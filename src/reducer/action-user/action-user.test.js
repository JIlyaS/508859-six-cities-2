import {DEFAULT_OFFERS, DEFAULT_OFFER} from '../../constants';
import reducer from './action-user';

describe(`Reducer work correctly`, () => {
  it(`Reducer action user without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: `Hamburg`,
      activeSortName: `Popular`,
      changedOffers: [],
      activeOfferCard: {},
      cities: [],
    });
  });
  it(`Reducer should change city by a given value`, () => {
    expect(reducer({
      city: `Hamburg`,
      changedOffers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    }, {
      type: `CHANGE_CITY`,
      payload: `Paris`
    })).toEqual({
      city: `Paris`,
      changedOffers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    });
  });
  it(`Reducer should get offers city by a given value`, () => {
    expect(reducer({
      city: `Hamburg`,
      changedOffers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    }, {
      type: `GET_OFFERS`,
      payload: [{
        id: `id1`,
        city: {
          name: `Paris`,
        }
      }]
    })).toEqual({
      city: `Hamburg`,
      changedOffers: [{
        id: `id1`,
        city: {
          name: `Paris`,
        }
      }],
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    });
  });
  it(`Reducer should get offers city empty array by a given value`, () => {
    expect(reducer({
      city: `Hamburg`,
      changedOffers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    }, {
      type: `GET_OFFERS`,
      payload: []
    })).toEqual({
      city: `Hamburg`,
      changedOffers: [],
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    });
  });
  it(`Reducer should change sort name by a given value`, () => {
    expect(reducer({
      city: `Hamburg`,
      changedOffers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    }, {
      type: `CHANGE_SORT`,
      payload: `Top rated first`
    })).toEqual({
      city: `Hamburg`,
      changedOffers: DEFAULT_OFFERS,
      activeSortName: `Top rated first`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    });
  });
  it(`Reducer should add active card object data by a given value`, () => {
    expect(reducer({
      city: `Hamburg`,
      changedOffers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    }, {
      type: `ADD_ACTIVE_CARD`,
      payload: DEFAULT_OFFER
    })).toEqual({
      city: `Hamburg`,
      changedOffers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    });
  });
  it(`Reducer should remove active card empty by a given value`, () => {
    expect(reducer({
      city: `Hamburg`,
      changedOffers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    }, {
      type: `REMOVE_ACTIVE_CARD`,
      payload: {}
    })).toEqual({
      city: `Hamburg`,
      changedOffers: DEFAULT_OFFERS,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`]
    });
  });
});
