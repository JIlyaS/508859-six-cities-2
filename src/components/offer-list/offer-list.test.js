import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {shape} from 'prop-types';
import {BrowserRouter} from 'react-router-dom';

import {OfferList} from './offer-list';

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
    offers={[{
      id: 0,
      title: ``,
      type: `room`,
      price: 0,
      img: `room.jpg`,
      rating: 0,
      isPremium: false,
      isFavorite: false,
    }]}
    activeOfferMouseEnterHandler={() => {}}
    deactiveOfferMouseLeaveHandler={() => {}}
    changeOfferFavorite={() => {}}
    getLogin={() => {}}
    classOfferCard="main_offer"
    classCard={{
      list: ``,
      card: ``,
      wrapper: ``,
      info: ``
    }}
  />, createContext());

  expect(toJSON(tree)).toMatchSnapshot();
});
