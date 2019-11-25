import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {shape} from 'prop-types';
import {BrowserRouter} from 'react-router-dom';

import {Header} from './header';

Enzyme.configure({adapter: new Adapter()});

const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {},
  },
};

const createContext = () => ({
  context: {router},
  childContextTypes: {router: shape({})},
});

it(`Header correctly renders after relaunch`, () => {
  const tree = shallow(<Header
    isAuthorizationRequired={false}
    login={{
      email: `info@mail.ru`
    }}
  />, createContext());

  expect(toJSON(tree)).toMatchSnapshot();
});
