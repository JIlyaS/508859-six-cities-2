import * as React from 'react';
import * as Enzyme from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as Adapter from 'enzyme-adapter-react-16';
import {shape} from 'prop-types';
import {BrowserRouter} from 'react-router-dom';
import {MOCK_DATA_UPDATED_FAVORITE} from '../../constants';

import {FavoritesList} from './favorites-list';

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

it(`FavoritesList correctly renders after relaunch`, () => {
  const tree = Enzyme.shallow(<FavoritesList
    favoriteOffers={MOCK_DATA_UPDATED_FAVORITE}
    isFavoritesFetching={false}
    onLoadFavorites={() => {}}
    onChangeOfferFavorite={() => {}}
  />, createContext());

  expect(toJSON(tree)).toMatchSnapshot();
});
