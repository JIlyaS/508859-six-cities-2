import {ActionType} from '../../constants';

const initialState = {
  city: ``,
  activeSortName: `Popular`,
  activeOfferCard: {},
  cities: [],
  isAuthorizationRequired: true,
  formSubmit: {
    blockedInput: false,
    blockedSubmit: true,
    submit: false,
    error: false
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
        activeSortName: `Popular`
      });
    case ActionType.CHANGE_SORT:
      return Object.assign({}, state, {
        activeSortName: action.payload
      });
    case ActionType.ADD_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeOfferCard: action.payload
      });
    case ActionType.REMOVE_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeOfferCard: action.payload
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });
    case ActionType.FORM_SUBMISSION:
    case ActionType.FORM_SUBMISSION_SUCCESS:
    case ActionType.FORM_SUBMISSION_ERROR:
    case ActionType.FORM_SUBMISSION_DEFAULT:
      return Object.assign({}, state, {
        formSubmit: action.payload,
      });
    default:
      return state;
  }
};

export default userReducer;
