import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import {App} from './app';

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../map/map`);

const props = {
  appReducer: {
    city: ``,
    activeSortName: `Popular`,
    changedOffers: [],
    activeOfferCard: {},
    cities: [],
    // isAuthorizationRequired: true,
  },
  userReducer: {
    offers: [],
    login: {},
  }
};

const mockStore = configureMockStore();
const store = mockStore(props);

it(`App correctly renders after relaunch`, () => {
  const tree = shallow(<App
    loadOffers={() => {}}
    store={store}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
