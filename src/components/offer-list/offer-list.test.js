import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
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
  const tree = shallow(<OfferList
    offers={OfferListMock.OFFERS}
    activeOfferMouseEnterHandler={() => {}}
    deactiveOfferMouseLeaveHandler={() => {}}
    changeOfferFavorite={() => {}}
    getLogin={() => {}}
    classOfferCard={OfferListMock.CLASS_OFFER_CARD}
    classCard={OfferListMock.CLASS_CARD}
  />, createContext());

  expect(toJSON(tree)).toMatchSnapshot();
});
