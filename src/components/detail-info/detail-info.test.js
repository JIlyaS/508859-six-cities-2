import React from 'react';
import renderer from 'react-test-renderer';
import {DetailInfo} from './detail-info';
import {CURRENT_OFFER, DEFAULT_OFFERS} from '../../constants';

jest.mock(`../map/map`);

it(`DetailInfo correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<DetailInfo
      idPath={`1`}
      currentOffer={CURRENT_OFFER}
      otherOffers={DEFAULT_OFFERS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
