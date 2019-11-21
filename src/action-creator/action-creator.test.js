import ActionCreator from './action-creator';
import {DEFAULT_LOGIN, MOCK_DATA_ADAPTER, MOCK_DATA_COMMENTS_ADAPTER, MOCK_DATA_COMMENTS_SERVER, MOCK_DATA_SERVER} from '../constants';

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

  it(`Action creator for authorization on website returns action with bool payload`, () => {
    expect(ActionCreator.requireAuthorization(true)).toEqual({
      type: `REQUIRED_AUTHORIZATION`,
      payload: true
    });
  });
  it(`Action creator for add login returns action with object data payload`, () => {
    expect(ActionCreator.addLogin(DEFAULT_LOGIN)).toEqual({
      type: `ADD_LOGIN`,
      payload: DEFAULT_LOGIN
    });
  });
  it(`Action creator for add login returns action with empty object payload`, () => {
    expect(ActionCreator.addLogin({})).toEqual({
      type: `ADD_LOGIN`,
      payload: {}
    });
  });
  it(`Action creator for load offers returns action with array data payload`, () => {
    expect(ActionCreator.loadOffers(MOCK_DATA_SERVER)).toEqual({
      type: `LOAD_OFFERS`,
      payload: MOCK_DATA_ADAPTER
    });
  });
  it(`Action creator for load offers returns action with empty data payload`, () => {
    expect(ActionCreator.loadOffers([])).toEqual({
      type: `LOAD_OFFERS`,
      payload: []
    });
  });
  it(`Action creator for load reviews returns action with array data payload`, () => {
    expect(ActionCreator.loadReviews(MOCK_DATA_COMMENTS_SERVER)).toEqual({
      type: `LOAD_REVIEWS`,
      payload: MOCK_DATA_COMMENTS_ADAPTER
    });
  });
  it(`Action creator for load reviews returns action with empty data payload`, () => {
    expect(ActionCreator.loadReviews([])).toEqual({
      type: `LOAD_REVIEWS`,
      payload: []
    });
  });
});
