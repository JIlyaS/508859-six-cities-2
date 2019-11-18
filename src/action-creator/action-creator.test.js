import ActionCreator from './action-creator';

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
});
