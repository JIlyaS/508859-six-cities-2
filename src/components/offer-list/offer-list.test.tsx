import * as React from 'react';
import * as Enzyme from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as Adapter from 'enzyme-adapter-react-16';
import {shape} from 'prop-types';
import {BrowserRouter} from 'react-router-dom';

import {OfferList} from './offer-list';
import {OfferListMock} from '../../constants';

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

it(`OfferList correctly renders after relaunch`, () => {
  const tree = Enzyme.shallow(<OfferList
    offers={OfferListMock.OFFERS}
    onActiveOfferMouseEnter={() => {}}
    onDeactiveOfferMouseLeave={() => {}}
    onGetLogin={() => {}}
    onChangeOfferFavorite={() => {}}
    classOfferCard={OfferListMock.CLASS_OFFER_CARD}
  />, createContext());

  expect(toJSON(tree)).toMatchSnapshot();
});
