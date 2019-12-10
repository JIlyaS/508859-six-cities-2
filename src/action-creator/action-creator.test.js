import ActionCreator from './action-creator';
import {
  DEFAULT_LOGIN,
  MOCK_DATA_ADAPTER,
  MOCK_DATA_COMMENTS_ADAPTER,
  MOCK_DATA_COMMENTS_SERVER,
  MOCK_DATA_UPDATED_FAVORITE_SERVER,
  MOCK_DATA_UPDATED_FAVORITE,
  MOCK_DATA_SERVER,
  DEFAULT_OFFER_SERVER,
  DEFAULT_OFFER_ADAPTER,
  ActionType,
} from '../constants';

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`
    });
  });
  it(`Action creator for change sort name returns action with value payload`, () => {
    expect(ActionCreator.changeSortName(`Top rated first`)).toEqual({
      type: ActionType.CHANGE_SORT,
      payload: `Top rated first`
    });
  });
  it(`Action creator for add active card returns action with object data payload`, () => {
    expect(ActionCreator.changeActiveCard({
      id: `id0`,
      city: {
        name: `Amsterdam`,
      },
      offerCoordinates: [52.3909553943508, 4.85309666406198],
    })).toEqual({
      type: ActionType.ADD_ACTIVE_CARD,
      payload: {
        id: `id0`,
        city: {
          name: `Amsterdam`,
        },
        offerCoordinates: [52.3909553943508, 4.85309666406198],
      }
    });
  });
  it(`Action creator for add active card returns action with empty object payload`, () => {
    expect(ActionCreator.changeActiveCard({})).toEqual({
      type: ActionType.ADD_ACTIVE_CARD,
      payload: {}
    });
  });
  it(`Action creator for remove active card returns action with empty object payload`, () => {
    expect(ActionCreator.removeActiveCard()).toEqual({
      type: ActionType.REMOVE_ACTIVE_CARD,
      payload: {}
    });
  });

  it(`Action creator for authorization on website returns action with bool payload`, () => {
    expect(ActionCreator.requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true
    });
  });
  it(`Action creator for add login returns action with object data payload`, () => {
    expect(ActionCreator.addLogin(DEFAULT_LOGIN)).toEqual({
      type: ActionType.ADD_LOGIN,
      payload: DEFAULT_LOGIN
    });
  });
  it(`Action creator for add login returns action with empty object payload`, () => {
    expect(ActionCreator.addLogin({})).toEqual({
      type: ActionType.ADD_LOGIN,
      payload: {}
    });
  });
  it(`Action creator for load offers success returns action with array data payload`, () => {
    expect(ActionCreator.fetchOffersSuccess(MOCK_DATA_SERVER)).toEqual({
      type: ActionType.FETCH_OFFERS_SUCCESS,
      payload: MOCK_DATA_ADAPTER
    });
  });
  it(`Action creator for load offers success returns action with empty data payload`, () => {
    expect(ActionCreator.fetchOffersSuccess([])).toEqual({
      type: ActionType.FETCH_OFFERS_SUCCESS,
      payload: []
    });
  });
  it(`Action creator for load offers request returns action with data payload`, () => {
    expect(ActionCreator.fetchOffersRequest()).toEqual({
      type: ActionType.FETCH_OFFERS_REQUEST,
      payload: true
    });
  });
  it(`Action creator for load offers failure returns action with data payload`, () => {
    expect(ActionCreator.fetchOffersFailure()).toEqual({
      type: ActionType.FETCH_OFFERS_FAILURE,
      payload: false
    });
  });
  it(`Action creator for load reviews returns action with array data payload`, () => {
    expect(ActionCreator.loadReviews(MOCK_DATA_COMMENTS_SERVER)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: MOCK_DATA_COMMENTS_ADAPTER
    });
  });
  it(`Action creator for load reviews returns action with empty data payload`, () => {
    expect(ActionCreator.loadReviews([])).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: []
    });
  });
  it(`Action creator for updated favorite offer returns action with object data payload`, () => {
    expect(ActionCreator.updateFavoriteOffer(DEFAULT_OFFER_SERVER)).toEqual({
      type: ActionType.UPDATE_FAVORITE_OFFER,
      payload: DEFAULT_OFFER_ADAPTER
    });
  });
  it(`Action creator for load favorites success returns action with array data payload`, () => {
    expect(ActionCreator.fetchFavoritesSuccess(MOCK_DATA_UPDATED_FAVORITE_SERVER)).toEqual({
      type: ActionType.FETCH_FAVORITES_SUCCESS,
      payload: MOCK_DATA_UPDATED_FAVORITE
    });
  });
  it(`Action creator for load favorites success returns action with empty data payload`, () => {
    expect(ActionCreator.fetchFavoritesSuccess([])).toEqual({
      type: ActionType.FETCH_FAVORITES_SUCCESS,
      payload: []
    });
  });
  it(`Action creator for load favorites request returns action with payload`, () => {
    expect(ActionCreator.fetchFavoritesRequest()).toEqual({
      type: ActionType.FETCH_FAVORITES_REQUEST,
      payload: true
    });
  });
  it(`Action creator for load favorites failure returns action with payload`, () => {
    expect(ActionCreator.fetchFavoritesFailure()).toEqual({
      type: ActionType.FETCH_FAVORITES_FAILURE,
      payload: false
    });
  });
  it(`Action creator for submit form start returns action with payload`, () => {
    expect(ActionCreator.submitForm()).toEqual({
      type: ActionType.FORM_SUBMISSION,
      payload: {
        blockedInput: true,
        blockedSubmit: true,
        submit: false,
        error: false
      }
    });
  });
  it(`Action creator for submit form success returns action with payload`, () => {
    expect(ActionCreator.submitFormSuccess()).toEqual({
      type: ActionType.FORM_SUBMISSION_SUCCESS,
      payload: {
        blockedInput: false,
        blockedSubmit: false,
        submit: true,
        error: false
      }
    });
  });
  it(`Action creator for submit form error returns action with payload`, () => {
    expect(ActionCreator.submitFormError()).toEqual({
      type: ActionType.FORM_SUBMISSION_ERROR,
      payload: {
        blockedInput: false,
        blockedSubmit: false,
        submit: false,
        error: true
      }
    });
  });
  it(`Action creator for submit form default returns action with payload`, () => {
    expect(ActionCreator.submitFormDefault()).toEqual({
      type: ActionType.FORM_SUBMISSION_DEFAULT,
      payload: {
        blockedInput: false,
        blockedSubmit: true,
        submit: false,
        error: false
      }
    });
  });
});
