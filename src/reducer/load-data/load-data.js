import {ActionType} from '../../constants';

const initialState = {
  offers: [],
};

const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    default:
      return state;
  }
};

export default loadData;

