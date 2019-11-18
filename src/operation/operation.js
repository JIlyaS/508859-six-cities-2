import ActionCreator from '../action-creator/action-creator';
import Adapter from '../adapter';

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offers = Adapter.getOffers(response.data);
        dispatch(ActionCreator.loadOffers(offers));
      });
  },
};

export default Operation;
