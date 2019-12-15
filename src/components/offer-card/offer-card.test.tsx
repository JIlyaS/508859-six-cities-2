import * as React from 'react';
import * as Enzyme from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as Adapter from 'enzyme-adapter-react-16';
import {shape} from 'prop-types';
import {BrowserRouter} from 'react-router-dom';

import OfferCard from './offer-card';
import {OfferCardMock} from '../../constants';

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

it(`OfferCard correctly renders after relaunch`, () => {
  const tree = Enzyme.shallow(<OfferCard
    offer={OfferCardMock.OFFER}
    offerId={OfferCardMock.OFFER_ID}
    onActiveOfferMouseEnter={() => {}}
    onDeactiveOfferMouseLeave={() => {}}
    onFavoriteOfferClick={() => {}}
    classCard={OfferCardMock.CLASS_CARD}
  />, createContext());

  expect(toJSON(tree)).toMatchSnapshot();
});
