import {ActionType} from '../../constants';

const initialState = {
  offers: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload
      });
    default:
      return state;
  }
};

export default appReducer;

