import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {shape} from 'prop-types';
import {BrowserRouter} from 'react-router-dom';

import OfferCard from './offer-card';

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
  const tree = shallow(<OfferCard
    offer={{
      title: ``,
      type: `room`,
      price: 0,
      img: `room.jpg`,
      rating: 0,
      isPremium: false,
      isFavorite: false
    }}
    offerId={0}
    activeOfferMouseEnterHandler={() => {}}
    deactiveOfferMouseLeaveHandler={() => {}}
    cardTitleClickHandler={() => {}}
    changeFavoriteOfferClickHandler={() => {}}
    isNearPlace={true}
  />, createContext());

  expect(toJSON(tree)).toMatchSnapshot();
});
