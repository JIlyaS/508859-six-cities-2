import {
  DEFAULT_OFFERS,
  DEFAULT_LOGIN,
  DEFAULT_REVIEW,
  MOCK_DATA_ADAPTER,
  MOCK_DATA_UPDATED_FAVORITE,
  DEFAULT_OFFER_UPDATED_FAVORITE,
  ActionType,
} from '../../constants';
import reducer from './app-reducer';

describe(`Reducer work correctly`, () => {
  it(`Reducer load data without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should load offers request by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    }, {
      type: ActionType.FETCH_OFFERS_REQUEST,
      payload: true
    })).toEqual({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: true,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should load offers success by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    }, {
      type: ActionType.FETCH_OFFERS_SUCCESS,
      payload: DEFAULT_OFFERS
    })).toEqual({
      offers: DEFAULT_OFFERS,
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should load offers success empty array by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    }, {
      type: ActionType.FETCH_OFFERS_SUCCESS,
      payload: []
    })).toEqual({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should load offers failure by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: true,
      isFavoritesFetching: false,
    }, {
      type: ActionType.FETCH_OFFERS_FAILURE,
      payload: false
    })).toEqual({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should add login by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    }, {
      type: ActionType.ADD_LOGIN,
      payload: DEFAULT_LOGIN
    })).toEqual({
      offers: [],
      login: DEFAULT_LOGIN,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should add login empty array by a given value`, () => {
    expect(reducer({
      offers: [],
      login: DEFAULT_LOGIN,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    }, {
      type: ActionType.ADD_LOGIN,
      payload: null
    })).toEqual({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should load reviews by a given value`, () => {
    expect(reducer({
      offers: [],
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: DEFAULT_REVIEW
    })).toEqual({
      offers: [],
      login: null,
      reviews: DEFAULT_REVIEW,
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should load reviews empty array by a given value`, () => {
    expect(reducer({
      offers: DEFAULT_OFFERS,
      login: DEFAULT_LOGIN,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: null
    })).toEqual({
      offers: DEFAULT_OFFERS,
      login: DEFAULT_LOGIN,
      reviews: null,
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should update offer by a given value`, () => {
    expect(reducer({
      offers: MOCK_DATA_ADAPTER,
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    }, {
      type: ActionType.UPDATE_FAVORITE_OFFER,
      payload: DEFAULT_OFFER_UPDATED_FAVORITE
    })).toEqual({
      offers: MOCK_DATA_UPDATED_FAVORITE,
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should load favorites request by a given value`, () => {
    expect(reducer({
      offers: MOCK_DATA_UPDATED_FAVORITE,
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    }, {
      type: ActionType.FETCH_FAVORITES_REQUEST,
      payload: true
    })).toEqual({
      offers: MOCK_DATA_UPDATED_FAVORITE,
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: true,
    });
  });
  it(`Reducer should load favorites success by a given value`, () => {
    expect(reducer({
      offers: MOCK_DATA_UPDATED_FAVORITE,
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    }, {
      type: ActionType.FETCH_FAVORITES_SUCCESS,
      payload: MOCK_DATA_UPDATED_FAVORITE
    })).toEqual({
      offers: MOCK_DATA_UPDATED_FAVORITE,
      login: null,
      reviews: [],
      favorites: MOCK_DATA_UPDATED_FAVORITE,
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should load favorites success empty array by a given value`, () => {
    expect(reducer({
      offers: MOCK_DATA_ADAPTER,
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    }, {
      type: ActionType.FETCH_FAVORITES_SUCCESS,
      payload: []
    })).toEqual({
      offers: MOCK_DATA_ADAPTER,
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
  it(`Reducer should load favorites failure by a given value`, () => {
    expect(reducer({
      offers: MOCK_DATA_UPDATED_FAVORITE,
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: true,
    }, {
      type: ActionType.FETCH_FAVORITES_FAILURE,
      payload: false
    })).toEqual({
      offers: MOCK_DATA_UPDATED_FAVORITE,
      login: null,
      reviews: [],
      favorites: [],
      isOffersFetching: false,
      isFavoritesFetching: false,
    });
  });
});
