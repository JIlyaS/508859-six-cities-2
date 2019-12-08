import {DEFAULT_OFFER, ActionType} from '../../constants';
import reducer from './user-reducer';

describe(`Reducer work correctly`, () => {
  it(`Reducer action user without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [],
      isAuthorizationRequired: true,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    });
  });
  it(`Reducer should change city by a given value`, () => {
    expect(reducer({
      city: `Amsterdam`,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Paris`
    })).toEqual({
      city: `Paris`,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    });
  });
  it(`Reducer should change sort name by a given value`, () => {
    expect(reducer({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    }, {
      type: ActionType.CHANGE_SORT,
      payload: `Top rated first`
    })).toEqual({
      city: ``,
      activeSortName: `Top rated first`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    });
  });
  it(`Reducer should add active card object data by a given value`, () => {
    expect(reducer({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    }, {
      type: ActionType.ADD_ACTIVE_CARD,
      payload: DEFAULT_OFFER
    })).toEqual({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    });
  });
  it(`Reducer should remove active card empty by a given value`, () => {
    expect(reducer({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    }, {
      type: ActionType.REMOVE_ACTIVE_CARD,
      payload: {}
    })).toEqual({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: {},
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    });
  });
  it(`Reducer should authorization by a given value`, () => {
    expect(reducer({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true
    })).toEqual({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: true,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    });
  });
  it(`Reducer should form submission by a given value`, () => {
    expect(reducer({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    }, {
      type: ActionType.FORM_SUBMISSION,
      payload: {
        blockedInput: true,
        blockedSubmit: true,
        submit: false,
        error: false
      }
    })).toEqual({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: true,
        blockedSubmit: true,
        submit: false,
        error: false
      },
    });
  });
  it(`Reducer should form submission success by a given value`, () => {
    expect(reducer({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    }, {
      type: ActionType.FORM_SUBMISSION_SUCCESS,
      payload: {
        blockedInput: false,
        blockedSubmit: false,
        submit: true,
        error: false
      }
    })).toEqual({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: false,
        submit: true,
        error: false
      },
    });
  });
  it(`Reducer should form submission error by a given value`, () => {
    expect(reducer({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    }, {
      type: ActionType.FORM_SUBMISSION_ERROR,
      payload: {
        blockedInput: false,
        blockedSubmit: false,
        submit: false,
        error: true
      }
    })).toEqual({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: false,
        submit: false,
        error: true
      },
    });
  });
  it(`Reducer should form submission default by a given value`, () => {
    expect(reducer({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        error: false,
        submit: false
      },
    }, {
      type: ActionType.FORM_SUBMISSION_DEFAULT,
      payload: {
        blockedInput: false,
        blockedSubmit: true,
        submit: false,
        error: false
      }
    })).toEqual({
      city: ``,
      activeSortName: `Popular`,
      activeOfferCard: DEFAULT_OFFER,
      cities: [`Amsterdam`, `Paris`, `Hamburg`],
      isAuthorizationRequired: false,
      formSubmit: {
        blockedInput: false,
        blockedSubmit: true,
        submit: false,
        error: false
      },
    });
  });
});
