import * as React from 'react';
import * as Enzyme from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as Adapter from 'enzyme-adapter-react-16';
import {shape} from 'prop-types';
import {BrowserRouter} from 'react-router-dom';

import {Header} from './header';
import {HeaderMock} from '../../constants';

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
  const tree = Enzyme.shallow(<Header
    isAuthorizationRequired={HeaderMock.IS_AUTH}
    loginStore={HeaderMock.LOGIN}
  />, createContext());

  expect(toJSON(tree)).toMatchSnapshot();
});
