import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {DetailInfo} from './detail-info';
import {CURRENT_OFFER, DEFAULT_OFFERS, DEFAULT_OFFER} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../map/map`);

it(`DetailInfo correctly renders after relaunch`, () => {
  const tree = shallow(<DetailInfo
    currentOffer={CURRENT_OFFER}
    otherOffers={DEFAULT_OFFERS}
    activeOfferCard={DEFAULT_OFFER}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
