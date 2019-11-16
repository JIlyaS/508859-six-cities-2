import {ActionType} from '../../constants';
import Adapter from '../../adapter';

const initialState = {
  offers: [],
};

const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: Adapter.getOffers(action.payload),
      });
    default:
      return state;
  }
};

export default loadData;

