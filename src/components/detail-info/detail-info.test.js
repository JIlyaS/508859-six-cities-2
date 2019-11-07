import React from 'react';
import renderer from 'react-test-renderer';
import {DetailInfo} from './detail-info';
import {DEFAULT_OFFERS} from '../../constants';

jest.mock(`../map/map`);

it(`DetailInfo correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<DetailInfo
      idPath={`1`}
      allOffers={DEFAULT_OFFERS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
