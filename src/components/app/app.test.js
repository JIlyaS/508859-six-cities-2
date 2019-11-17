import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';
import {DEFAULT_OFFERS} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../map/map`);

const props = {
  city: `Amsterdam`,
  offers: DEFAULT_OFFERS,
  allOffers: DEFAULT_OFFERS
};

const mockStore = configureMockStore();
const store = mockStore(props);

it(`App correctly renders after relaunch`, () => {
  const tree = shallow(<App
    isAuthorizationRequired={false}
    loadOffers={() => {}}
    store={store}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
