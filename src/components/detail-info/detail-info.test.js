import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {DetailInfo} from './detail-info';
import {
  CURRENT_OFFER,
  DEFAULT_OFFERS,
  DEFAULT_OFFER,
  DEFAULT_REVIEW,
  DEFAULT_LOGIN,
  DetailInfoMock
} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../map/map`);

it(`DetailInfo correctly renders after relaunch`, () => {
  const tree = shallow(<DetailInfo
    match={{params: {
      offerId: DetailInfoMock.ID
    }}}
    currentOffer={CURRENT_OFFER}
    otherOffers={DEFAULT_OFFERS}
    activeOfferCard={DEFAULT_OFFER}
    offers={DEFAULT_OFFERS}
    reviews={DEFAULT_REVIEW}
    idPath={DetailInfoMock.ID}
    login={DEFAULT_LOGIN}
    onGetLogin={() => {}}
    onLoadReviews={() => {}}
    onChangeOfferFavorite={() => {}}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
