import * as React from 'react';
import * as Enzyme from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as Adapter from 'enzyme-adapter-react-16';
import {DetailInfo} from './detail-info';
import {
  CURRENT_OFFER,
  DEFAULT_OFFERS,
  DEFAULT_REVIEW,
  DetailInfoMock
} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../map/map`);

it(`DetailInfo correctly renders after relaunch`, () => {
  const tree = Enzyme.shallow(<DetailInfo
    match={{params: {
      offerId: DetailInfoMock.ID
    }}}
    currentOffer={CURRENT_OFFER}
    otherOffers={DEFAULT_OFFERS}
    offers={DEFAULT_OFFERS}
    reviews={DEFAULT_REVIEW}
    onGetLogin={() => {}}
    onLoadReviews={() => {}}
    onChangeOfferFavorite={() => {}}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
