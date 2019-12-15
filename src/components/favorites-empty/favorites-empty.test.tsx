import * as React from 'react';
import * as Enzyme from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as Adapter from 'enzyme-adapter-react-16';

import {FavoritesEmpty} from './favorites-empty';

Enzyme.configure({adapter: new Adapter()});

it(`FavoritesEmpty correctly renders after relaunch`, () => {
  const tree = Enzyme.shallow(<FavoritesEmpty />);

  expect(toJSON(tree)).toMatchSnapshot();
});
