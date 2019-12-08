import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import {FavoritesEmpty} from './favorites-empty';

Enzyme.configure({adapter: new Adapter()});

it(`FavoritesEmpty correctly renders after relaunch`, () => {
  const tree = shallow(<FavoritesEmpty />);

  expect(toJSON(tree)).toMatchSnapshot();
});
